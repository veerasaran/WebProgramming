const addAlbumBtn = document.getElementById("addAlbumBtn");
const errorMessage = document.getElementById("error-message");

addAlbumBtn.addEventListener("click", () => {
  const albumName = document.getElementById("albumName").value.trim();
  const releaseYear = document.getElementById("releaseYear").value.trim();
  const genre = document.getElementById("genre").value;
  const favorite = document.getElementById("favorite").checked;

  // Validation
  if (!albumName || !releaseYear || !genre) {
    errorMessage.textContent = "Please fill out all fields!";
    return;
  }

  errorMessage.textContent = ""; // Clear error

  // Create album entry
  const li = document.createElement("li");
  li.textContent = `${albumName} (${releaseYear}) - ${genre}`;

  // Add to appropriate list
  if (favorite) {
    document.getElementById("favoriteAlbumList").appendChild(li);
  } else {
    document.getElementById("albumList").appendChild(li);
  }

  // Clear fields
  document.getElementById("albumForm").reset();
});
