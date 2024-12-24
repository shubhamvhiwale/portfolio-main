const handleSubmitUser_name = () => {
    const inputField = document.getElementById("user_name");
    if (inputField.value) {
        window.location.href = `../index.html?player_name=${inputField.value}&game_level=${1}`
    } else {
        window.alert("Please insert your name first.")
    }

}