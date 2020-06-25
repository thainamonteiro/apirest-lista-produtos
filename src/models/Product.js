const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//criando o Schema da model
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//exportando o mongoosePaginate
ProductSchema.plugin(mongoosePaginate);

//registrando o model na aplicação
mongoose.model('Product', ProductSchema);

