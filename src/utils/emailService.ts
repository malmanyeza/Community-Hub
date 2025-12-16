import emailjs from '@emailjs/browser';

// TODO: User must replace these with their own EmailJS credentials
const SERVICE_ID = 'service_pqz39o9';
const TEMPLATE_ID = 'template_tfry3us';
const PUBLIC_KEY = 'PYFj1PRwHFcj3sOHa';

export const sendVerificationEmail = async (
    toEmail: string,
    verificationCode: string,
    eventTitle: string
) => {
    console.log('--- emailService: sendVerificationEmail called ---');
    console.log('toEmail:', toEmail);
    console.log('eventTitle:', eventTitle);
    // don't log code if sensitive, but for debug it's fine
    console.log('verificationCode:', verificationCode);

    if (!toEmail) {
        console.error('ERROR: toEmail is empty!');
        throw new Error("Recipient email address is empty. Cannot send verification code.");
    }

    try {
        const templateParams = {
            email: toEmail, // Matches {{email}} in your template image
            passcode: verificationCode, // Matches {{passcode}} in your template image
            event_title: eventTitle,
        };



        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );

        return response;
    } catch (error) {
        console.error('Failed to send verification email:', error);
        throw error;
    }
};
