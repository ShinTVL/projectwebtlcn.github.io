const nodemailer = require("nodemailer");
function SendMail(receiver,subject,contentMail){
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
               user: 'shoelg98@gmail.com',
               pass: 'shopgiayonline'
           },
           tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    
    const mailOptions = {
        from: 'shoelg98@gmail.com', // sender address
        to: receiver, // list of receivers
        subject: subject, // Subject line
        html: contentMail// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if (err){
            console.log("Lỗi gửi mail");
        }
        else{
            console.log("Mail Đã đc gửi")
        }
     });
}
module.exports = SendMail;

   