def version = '1.0.0'

pipeline {
    agent {
        node {
            label 'react'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '<---------Checking out code--------->'
                checkout scm
                echo '<---------Code checked out--------->'
            }
        }
        
        stage('Clone-code') {
            steps {
                echo '<---------Cloning code--------->'
                git branch: 'main', url: 'https://github.com/SaurabhS55/foodie'
                echo '<---------Code cloned--------->'
            }
        } 

        stage('Install Dependencies') {
            steps {
                echo '<---------Installing dependencies--------->'
                sh 'npm install'
                echo '<---------Dependencies installed--------->'
            }
        }

        stage('Build') {
            steps {
                echo '<---------Building code--------->'
                sh 'npm run build'
                echo '<---------Code built--------->'
            }
        }
        stage('Test') {
            steps {
                echo '<---------Testing code--------->'
                sh 'npm test -- --watchAll=false'
                echo '<---------Code tested--------->'
            }
        }

        stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'sonarqube-scanner'
            }

            steps {
                withSonarQubeEnv('sonar-cred') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
}