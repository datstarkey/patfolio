$image = "docker.starkeydigital.com/patfolio:latest";
docker build . -t $image;
docker push $image;