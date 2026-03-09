from flask import Blueprint, request, jsonify
import resend
import os
import requests

contact_blueprint = Blueprint('contact', __name__)

# Resend API key se učitava iz environment varijable
resend.api_key = os.environ.get('RESEND_API_KEY')
RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY')

def verify_recaptcha(token):
    """Verifikuje reCAPTCHA token sa Google serverom"""
    try:
        print(f"Verifying reCAPTCHA with secret: {RECAPTCHA_SECRET_KEY[:10]}...")
        response = requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={
                'secret': RECAPTCHA_SECRET_KEY,
                'response': token
            }
        )
        result = response.json()
        print(f"reCAPTCHA response: {result}")

        # Score 0.3 ili više se smatra validnim (sniženo za testiranje)
        is_valid = result.get('success', False) and result.get('score', 0) >= 0.3
        print(f"reCAPTCHA valid: {is_valid}, score: {result.get('score', 'N/A')}")
        return is_valid
    except Exception as e:
        print(f"reCAPTCHA verification error: {e}")
        return False

@contact_blueprint.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()

        # Verifikacija reCAPTCHA
        recaptcha_token = data.get('recaptchaToken')
        if not recaptcha_token:
            return jsonify({'success': False, 'message': 'reCAPTCHA verifikacija nije uspela'}), 400

        if not verify_recaptcha(recaptcha_token):
            return jsonify({'success': False, 'message': 'reCAPTCHA verifikacija nije uspela. Pokušajte ponovo.'}), 400

        # Validacija podataka
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'Polje {field} je obavezno'}), 400

        name = data['name']
        email = data['email']
        phone = data.get('phone', 'Nije uneto')
        message = data['message']

        # Kreiranje email poruke
        admin_email = os.environ.get('ADMIN_EMAIL', 'dvdcolak@gmail.com')

        params = {
            "from": "PlantDGD Kontakt <onboarding@resend.dev>",
            "to": [admin_email],
            "subject": f"Nova kontakt poruka od {name}",
            "html": f"""
            <h2>Nova poruka sa kontakt forme</h2>
            <p><strong>Ime i prezime:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Telefon:</strong> {phone}</p>
            <p><strong>Poruka:</strong></p>
            <p>{message}</p>
            <hr>
            <p><em>Ova poruka je automatski generisana sa sajta.</em></p>
            """
        }

        # Slanje email-a preko Resend API
        resend.Emails.send(params)

        return jsonify({
            'success': True,
            'message': 'Poruka je uspešno poslata! Hvala na javljanju.'
        })

    except Exception as e:
        import traceback
        error_details = traceback.format_exc()
        print(f"Greška pri slanju email-a: {str(e)}")
        print(f"Detalji: {error_details}")
        return jsonify({
            'success': False,
            'message': f'Greška: {str(e)}'
        }), 500
