import React from 'react';
import AnnonceItem from '../AnnonceItem/AnnonceItem';

const AnnonceList = ({ annonces, onUpdate, onDelete }) => {
    return (
        <div>
            {annonces.map(annonce => (
                <AnnonceItem key={annonce._id} annonce={annonce} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default AnnonceList;
