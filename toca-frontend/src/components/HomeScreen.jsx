import React from 'react';

function HomeScreen({ onAprenda, onPratique, onJogue }) {
  return (
    <div className="home-container">
      {/* Trigger Invisível: APRENDA (Placa Roxa) */}
      <button 
        className="trigger-btn trigger-aprenda" 
        onClick={onAprenda} 
        title="Aprenda" 
      />

      {/* Trigger Invisível: PRATIQUE (Placa Azul) */}
      <button 
        className="trigger-btn trigger-pratique" 
        onClick={onPratique} 
        title="Pratique" 
      />

      {/* Trigger Invisível: JOGUE (Placa Verde) */}
      <button 
        className="trigger-btn trigger-jogue" 
        onClick={onJogue} 
        title="Jogue" 
      />
    </div>
  );
}

export default HomeScreen;