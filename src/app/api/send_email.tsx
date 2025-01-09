import type { NextApiRequest, NextApiResponse } from 'next';
import { MailtrapClient } from 'mailtrap';

const TOKEN = '53ce4b0495a9472e5a73677be12096f8';
const SENDER_EMAIL = 'matheusteodoro200@gmail.com';
const TEMPLATE_UUID = 'add56fdf-c07a-4684-8e3b-5d21c300bfd6';

const client = new MailtrapClient({ token: TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const response = await client.send({
            from: { name: 'Your App', email: SENDER_EMAIL },
            to: [{ email }],
            template_uuid: TEMPLATE_UUID,
            template_variables: {
                user_name: name,
                user_message: message,
            },
        });

        console.log('Email sent:', response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
