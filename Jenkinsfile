pipeline{
  agent any
  stages{
    stage('checkout'){
      steps{
        git 'https://github.com/VementerOp/jenkinsxdocker.git' , branch :'main'
      }
    }
    stage ('Build Image'){
      steps{
        bat 'docker build -t mywebsite .'
      }
    }

    stage ('Stop Old Containers'){
      steps{
        bat 'docker stop mycont || exit 0'
        bat 'docker rm mycont || exit 0'
      }
    }
    stage ('Run Image - Containerize'){
      steps{
        bat 'docker run -d -p 7000:80 --name mycont mywebsite'
      }
    }
    
  }
  
