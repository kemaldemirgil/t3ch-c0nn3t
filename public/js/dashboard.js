const homeNavigator = () => {
    fetch('/api/users/home').then(
        document.location.replace('/api/users/home')
    );
};

const dashboardNavigator = () => {
    fetch('/api/users/dashboard').then(
        document.location.replace('/api/users/dashboard')
    );
};
  
document.querySelector('#dashboard').addEventListener('click', dashboardNavigator);
document.querySelector('#home').addEventListener('click', homeNavigator);