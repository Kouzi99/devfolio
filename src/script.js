const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme() {
  if (prefersDarkMode.matches) {
    // User prefers dark mode
    document.documentElement.classList.add('dark'); 
  } else {
    // User prefers light mode or no preference
    document.documentElement.classList.remove('dark'); 
  }
}

// Initial preference check
applyTheme();

// Listen for changes in user preference
prefersDarkMode.addEventListener('change', applyTheme);


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});




//clipbord
document.getElementById('copyButton').addEventListener('click', function() {
  const email = document.getElementById('myEmail').textContent;
  navigator.clipboard.writeText(email); 

  // Show the toast
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide the toast after 2 seconds
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000); 
});
