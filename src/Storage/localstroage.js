

export function addPasswordToLocal(name, password){
    let existingPw = loadPasswordsFromLocal()
    console.log(existingPw)
    existingPw.push({name: name, password: password})
    localStorage.setItem('passwords', JSON.stringify(existingPw))
}

export function loadPasswordsFromLocal(){
    return JSON.parse(localStorage.getItem('passwords')) || []   
}

export function importPasswords(passwords){
    localStorage.setItem('passwords', JSON.stringify(passwords))
}

export function exportPasswords(){
    const jsonData = localStorage.getItem('passwords') || []

    const blob = new Blob([jsonData], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'test.json'; 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

export function importPasswordsFromJson(file){
      if (file && file.type === 'application/json') {
        const reader = new FileReader();
  
        reader.onload = async (e) => {
          try {
            const jsonData = JSON.parse(e.target.result);
            importPasswords(jsonData)
          } catch (error) {
            console.error('Error parsing JSON file:', error);
          }
        };
  
        reader.readAsText(file);
      } else {
        alert('Please upload a valid JSON file.');
      }
    
  
}