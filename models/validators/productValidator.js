const Yup = require("yup");

exports.productValidationSchema = Yup.object().shape({
    title: Yup.string().required().max(64),
    price: Yup.string().required(),
    stock: Yup.string().required(),
    sold: Yup.string(),
    overview: Yup.string(),
    thumb: Yup.object().shape({
        name: Yup.string().required(),
        size: Yup.number().max(3000000),
        MimeType: Yup.mixed().oneOf(["image/jpg", "image/png"]),
    }),
});
