import React, { useState } from 'react';

const AnnonceForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        user: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            title: '',
            description: '',
            price: '',
            category: '',
            user: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Titre" required />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Prix" required />
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Catégorie" required />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AnnonceForm;
