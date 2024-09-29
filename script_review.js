function login() {
    const loginCode = document.getElementById('login-code').value;
    const correctCode = "ztehtkv2007"; // Set the valid login code
  
    // Check login code
    if (loginCode === correctCode) {
        // Hide login form and show report
        document.getElementById('login-form').style.display = "none";
        document.getElementById('report').style.display = "block";
      
        // Display login success notification
        showNotification('Login successful!');
      
        // Show random number of students online
        const onlineCount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        document.getElementById("online-students").textContent = `Students online: ${onlineCount}`;
      
        // Update score badges
        updateScoreBadges();
      
        // Render the enhanced performance chart
        renderChart();
    } else {
        // Display error notification for incorrect code
        document.getElementById('error-message').style.display = "block";
        showNotification('Invalid login code!');
    }
}
  
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    // Update notification content
    notificationText.textContent = message;
    
    // Show notification
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function updateScoreBadges() {
    const scoreElements = document.querySelectorAll('.levels div span');
    
    scoreElements.forEach(element => {
        const score = parseInt(element.textContent, 10);
        
        // Remove previous badge classes
        element.classList.remove('badge-low', 'badge-medium', 'badge-high');

        // Add classes based on score
        if (score < 50) {
            element.classList.add('badge-low');
        } else if (score < 75) {
            element.classList.add('badge-medium');
        } else {
            element.classList.add('badge-high');
        }
    });
}

function renderChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript'],
            datasets: [{
                label: 'Test Scores',
                data: [90, 80, 75],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)', // Blue for HTML
                    'rgba(46, 204, 113, 0.6)', // Green for CSS
                    'rgba(241, 196, 15, 0.6)'  // Yellow for JavaScript
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)'
                ],
                borderWidth: 1,
                borderRadius: 10, // Rounded corners
                hoverBackgroundColor: [
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Hide legend to keep the design clean
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` Score: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        borderDash: [5, 5]
                    },
                    ticks: {
                        color: '#2c3e50',
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    ticks: {
                        color: '#2c3e50',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
}
