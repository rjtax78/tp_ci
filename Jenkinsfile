pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/rjtax78/tp_ci.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def npmHome = tool name: 'NodeJS 12', type: 'NodeJSInstallation'
                    env.PATH = "${npmHome}/bin:${env.PATH}"
                }
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'git --version',
                bat 'npm start'
            }
        }
    }

    post {
        always {
            junit '**/jest-test-results.xml'
            archiveArtifacts artifacts: '**/coverage/**'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
