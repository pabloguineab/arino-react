import React, { useState } from "react";

function StreamlitForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm && (
        <iframe
          title="Streamlit Form"
          src="https://pabloguineab-genpdf-streamlit-app-o4rtfm.streamlit.app/"
          width="100%"
          height="600"
          frameBorder="0"
        />
      )}
    </div>
  );
}


import React from "react";

function ShowFormButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Show Form
    </button>
  );
}

export default StreamlitForm; ShowFormButton;

