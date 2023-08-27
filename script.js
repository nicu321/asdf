const textChanger = () => {
    const element = document.getElementById('privet');
    if (element.style.color === 'blue') {
        element.style.color = 'white';
    } else {
        element.style.color = 'blue';
    }
}