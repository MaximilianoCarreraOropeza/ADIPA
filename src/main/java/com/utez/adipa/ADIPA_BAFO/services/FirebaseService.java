package com.utez.adipa.ADIPA_BAFO.services;

import com.google.cloud.firestore.*;
import com.google.api.core.ApiFuture;
import com.google.firebase.cloud.FirestoreClient;
import com.utez.adipa.ADIPA_BAFO.model.entity.Firebase;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {

    public List<Firebase> getAllEstacionamientos() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference collectionReference = dbFirestore.collection("adipa");
        ApiFuture<QuerySnapshot> future = collectionReference.get();
        QuerySnapshot querySnapshot = future.get();
        List<Firebase> estacionamientos = new ArrayList<>();
        for (DocumentSnapshot document : querySnapshot.getDocuments()) {
            Firebase firebase = document.toObject(Firebase.class);
            estacionamientos.add(firebase);
        }
        return estacionamientos;
    }

    public Firebase getEstacionamiento(String id_estacionamiento) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("adipa").document(id_estacionamiento);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Firebase firebase;
        if (document.exists()){
            firebase = document.toObject(Firebase.class);
            return firebase;
        }
        return null;
    }

    public String saveEstacionamiento(Firebase firebase) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> colletionApiFuture = dbFirestore.collection("adipa").document(firebase.getId_estacionamiento()).set(firebase);
        return colletionApiFuture.get().getUpdateTime().toString();
    }

    public String deleteEstacionamiento(String id_estacionamiento){
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection("adipa").document(id_estacionamiento).delete();
        return writeResult + id_estacionamiento;
    }

    public String updateEstacionamiento(Firebase firebase) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> colletionApiFuture = dbFirestore.collection("adipa").document(firebase.getId_estacionamiento()).set(firebase);
        return colletionApiFuture.get().getUpdateTime().toString();
    }
}
