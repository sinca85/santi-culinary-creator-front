window.API_BASE_URL = "";

window.fetchPublicContent = async function(){
  const response = await fetch(`${API_BASE_URL}/api/content`);

  if(!response.ok){
    const error = await response.json().catch(() => ({}));

    throw new Error(
      error.error || "No se pudo cargar el contenido público"
    );
  }

  return response.json();
};
