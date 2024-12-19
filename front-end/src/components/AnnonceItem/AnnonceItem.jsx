import React, { useState } from 'react';
import './AnnonceItem.css';

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
        <div className="annonce-item">
            {isEditing ? (
                <div>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                    <button className="btn-primary" onClick={handleUpdate}>Enregistrer</button>
                    <button className="btn-secondary" onClick={() => setIsEditing(false)}>Annuler</button>
                </div>
            ) : (
                <div>
                    <h3>{annonce.title}</h3>
                    <p>{annonce.description}</p>
                    <p>{annonce.category}</p>
                    <p>{annonce.price} €</p>
                    <button className="btn-primary" onClick={() => setIsEditing(true)}>Modifier</button>
                    <button className="btn-secondary delete" onClick={() => onDelete(annonce._id)}>Supprimer</button>
                </div>
            )}
        </div>
    );
};

export default AnnonceItem;
