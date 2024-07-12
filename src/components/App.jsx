import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      habitat={contacts.habitat}
      lifespan={contacts.lifespan}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Wildlife Wonders</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
