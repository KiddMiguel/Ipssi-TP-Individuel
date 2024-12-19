import React, { useEffect, useState } from 'react';
import { getAllAnnonces, getCurrentUser, getUserAnnonces, createAnnonce, updateAnnonce, deleteAnnonce } from '../../api/api';
import AnnonceList from '../AnnonceList/AnnonceList';
import AnnonceForm from '../AnnonceForm/AnnonceForm';

const Accueil = () => {
    const [annonces, setAnnonces] = useState([]);
    const [userAnnonces, setUserAnnonces] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchAnnonces();
        fetchCurrentUser();
    }, []);

    const fetchAnnonces = async () => {
        try {
            const response = await getAllAnnonces();
            setAnnonces(response.data.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces:', error);
        }
    };

    const fetchCurrentUser = async () => {
        try {
            const response = await getCurrentUser();
            console.log('Current user:', response);
            setCurrentUser(response.data.data);
            fetchUserAnnonces(response.data.data._id);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        }
    };

    const fetchUserAnnonces = async (userId) => {
        try {
            const response = await getUserAnnonces(userId);
            setUserAnnonces(response.data.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des annonces de l\'utilisateur:', error);
        }
    };

    const handleAddAnnonce = async (annonce) => {
        try {
            let data = {
                title: annonce.title,
                description: annonce.description,
                price: annonce.price,
                category: annonce.category,
                user : currentUser._id
            };

            const response = await createAnnonce(data);
            setAnnonces([...annonces, response.data.data]);
            setUserAnnonces([...userAnnonces, response.data.data]);
            setShowForm(false);
            

        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'annonce:', error);
        }
    };

    const handleUpdateAnnonce = async (id, updatedAnnonce) => {
        try {
            const response = await updateAnnonce(id, {
                title: updatedAnnonce.title,
                description: updatedAnnonce.description,
                price: updatedAnnonce.price,
                category: updatedAnnonce.category
            });
            setAnnonces(annonces.map(annonce => annonce._id === id ? response.data.data : annonce));
            setUserAnnonces(userAnnonces.map(annonce => annonce._id === id ? response.data.data : annonce));
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'annonce:', error);
        }
    };

    const handleDeleteAnnonce = async (id) => {
        try {
            await deleteAnnonce(id);
            setAnnonces(annonces.filter(annonce => annonce._id !== id));
            setUserAnnonces(userAnnonces.filter(annonce => annonce._id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'annonce:', error);
        }
    };

    return (
        <div>
            <h1>Accueil</h1>
                    <button onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Annuler" : "Ajouter une annonce"}
                    </button>
                    {showForm && <AnnonceForm onSubmit={handleAddAnnonce} />}
                    <h2>Mes annonces</h2>
                    <AnnonceList annonces={userAnnonces} onUpdate={handleUpdateAnnonce} onDelete={handleDeleteAnnonce} />

              
            <h2>Toutes les annonces</h2>
            <AnnonceList annonces={annonces} onUpdate={handleUpdateAnnonce} onDelete={handleDeleteAnnonce} />
         
        </div>
    );
};

export default Accueil;
