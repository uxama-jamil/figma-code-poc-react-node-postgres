import nodemailer from 'nodemailer';

// Utility function to send email
const sendEmail = async (email, otp, subject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
        
          const mailOptions = {
            from: "clincalpad@noreply.com",
            to: email,
            subject,
            text: `Your OTP code is: ${otp}`,
          };
        try {
            // Send the email and wait for the result
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
          } catch (error) {
            // Handle the error
            console.error('Error sending email:', error);
          }
};
  
  
// Utility function to generate the otp
const generateLocalOtp = () => {
    // Generate OTP and set expiration time
    const otp = Math.floor(100000 + Math.random() * 900000);  // Generate OTP
    const otpExpiresAt = new Date(new Date().getTime() + 5 * 60000);  // OTP expiration time (5 mins)

    return {
        otp,
        otpExpiresAt
    }
};



  export {
    sendEmail,
    generateLocalOtp
  }