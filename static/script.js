document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const description = document.getElementById('description');
    const responsibilities = document.getElementById('responsibilities');
    const qualifications = document.getElementById('qualifications');
    const query = document.getElementById('query');
    const searchBtn = document.getElementById('search-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Initially disable the Query box and Submit button
    query.disabled = true;
    submitBtn.disabled = true;

    console.log('Initial state set: Query and Submit buttons disabled.');

    // Stub function for querying the vector index
    function queryCandidates() {
        console.log('Querying vector index for top 10 candidates...');
        // Simulating query by stubbing the output
        const results = 'Top 10 candidates found... (stub)';
        return results;
    }

    // Handle Search Candidates button click
    searchBtn.addEventListener('click', function() {
        console.log('Search Candidates button clicked.');
        
        // Simulate querying for candidates (stub)
        const results = queryCandidates();

        // Disable the first three textboxes
        description.disabled = true;
        responsibilities.disabled = true;
        qualifications.disabled = true;
        console.log('Description, Responsibilities, and Qualifications textboxes disabled.');

        // Enable the query box and submit button
        query.disabled = false;
        submitBtn.disabled = false;
        console.log('Query textbox and Submit button enabled.');

        // Display the stubbed search result in the answer box
        const answerBox = document.getElementById('answer-content');
        answerBox.innerHTML += `<p><strong>Search Results:</strong> ${results}</p>`;
    });

    // Handle Reset button click
    resetBtn.addEventListener('click', function() {
        console.log('Reset button clicked.');
        
        // Clear all textboxes and reset the form state
        description.disabled = false;
        responsibilities.disabled = false;
        qualifications.disabled = false;
        query.disabled = true;
        submitBtn.disabled = true;
        
        description.value = '';
        responsibilities.value = '';
        qualifications.value = '';
        query.value = '';
        console.log('Form reset: all fields cleared and states reset.');

        // Clear the answer box content
        const answerBox = document.getElementById('answer-content');
        answerBox.innerHTML = '<p>Answers will appear here after you submit the form.</p>';
    });

    // Handle Save button click
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', function() {
        console.log('Save button clicked.');
        
        // Stub action for save functionality
        const answerBoxContent = document.getElementById('answer-content').innerHTML;
        console.log('Saving the following content: ', answerBoxContent);
        
        // Add your save logic here (e.g., send the data to the server, save to a file, etc.)
        alert('Save functionality is currently a stub. Replace with actual save logic.');
    });

    // Handle Submit Query button click (submitting the form)
    document.getElementById('job-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from refreshing the page

        // Get the query text
        const queryText = query.value;
        
        // Display the query in the answer box
        const answerBox = document.getElementById('answer-content');
        answerBox.innerHTML += `<p><strong>Query Submitted:</strong> ${queryText}</p>`;
        
        // Clear the query textbox for the next input
        query.value = '';
        console.log('Query submitted and displayed: ' + queryText);
    });
});
