import React from "react";

function About() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2>About React Router DOM</h2>
            <p>React Router is a library that provides routing capabilities for React applications.</p>
            <p>Routing means handling navigation between different views.</p>
            <p>React Router is the standard routing library for React applications. It enables you to:</p>
            <ul>
                <li>Create multiple pages in your single-page application</li>
                <li>Handle URL parameters and query strings</li>
                <li>Manage browser history and navigation</li>
                <li>Create nested routes and layouts</li>
                <li>Implement protected routes for authentication</li>
            </ul>
        </div>
    );
}

export default About;