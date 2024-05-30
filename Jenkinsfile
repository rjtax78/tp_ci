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
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
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
