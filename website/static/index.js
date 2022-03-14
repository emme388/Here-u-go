function deleteFolder(folderId) {
  fetch('/delete-folder', {
    method: "POST",
    body: JSON.stringify({ folderId: folderId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function deleteNote(noteId, folderId) {
  fetch('/delete-note', {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/home/"+folderId;
  });
}
