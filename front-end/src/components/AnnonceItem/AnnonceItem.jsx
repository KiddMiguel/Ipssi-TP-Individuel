import React, { useState } from 'react';

const AnnonceItem = ({ annonce, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...annonce });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(annonce._id, formData);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                    <button onClick={handleUpdate}>Enregistrer</button>
                    <button onClick={() => setIsEditing(false)}>Annuler</button>
                </div>
            ) : (
                <div>
                    <h3>{annonce.title}</h3>
                    <p>{annonce.description}</p>
                    <p>{annonce.price} €</p>
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                    <button onClick={() => onDelete(annonce._id)}>Supprimer</button>
                </div>
            )}
        </div>
    );
};

export default AnnonceItem;
