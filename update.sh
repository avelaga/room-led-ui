#!/bin/bash

cd /var/www/html
sudo git clone https://github.com/avelaga/room-led-ui.git
cd room-led-ui
sudo npm i
sudo npm run build
cd ..
sudo cp ./room-led-ui/dist/* .
sudo rm -rf room-led-ui
