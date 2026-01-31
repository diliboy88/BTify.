#!/bin/bash
# Load in the functions and animations
source ~/Desktop/BTify./bash_loading_animations.sh
# Run BLA::stop_loading_animation if the script is interrupted
trap BLA::stop_loading_animation SIGINT
pyscript="~/BTify/DeviceGrabber->JSON/main.py"


clear 
echo " "
echo " "
echo "Adding BTify to the User root directory..."
BLA::start_loading_animation "${BLA_filling_bar[@]}"
sudo cp -r ~/Desktop/BTify./systemdmove ~/BTify && sleep 7
BLA::stop_loading_animation
clear
echo "Done!"
echo "asking for permissions to run the scripts... "
sudo chmod +x ~/BTify/webifyviamd.sh
echo "making a service to run main.py in the background (systemd)..."
BLA::start_loading_animation "${BLA_filling_bar[@]}"
cat <<EOF | sudo tee /etc/systemd/system/BTifyDeviceReader.service > /dev/null
[Unit]
Description= Runs the device puller so a device.json is generated
Wants=BTifyDeviceReader.timer

[Service]
Type=oneshot
ExecStart=/usr/bin/python3 ${pyscript}
User=$(whoami)

[Install]
WantedBy=multi-user.target
EOF

cat <<EOF | sudo tee /etc/systemd/system/BTifyDeviceReader.timer > /dev/null
[Unit]
Description=Runs the device puller for BTify every 5 minutes

[Timer]
OnBootSec=1min
OnUnitActiveSec=5min
Persistent=true
OnCalendar=daily

[Install]
WantedBy=timers.target
EOF
sleep 7
BLA::stop_loading_animation
clear
echo "Done!"
sleep 1
echo "Enabling/Starting the timer!"
sudo systemctl daemon-reload
sudo systemctl enable BTifyDeviceReader.timer
sleep 2
echo "Done!"
sleep 1
clear
read -p "Make a systemd service to run Webify? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
echo "making a service to run webify....."
BLA::start_loading_animation "${BLA_filling_bar[@]}"
cat <<EOF | sudo tee /etc/systemd/system/Webify.service > /dev/null
[Unit]
Description= Runs the device puller so a device.json is generated
Wants=Webify.timer

[Service]
Type=oneshot
ExecStart=/bin/bash ~/BTify/webifyviamd.sh
User=$(whoami)

[Install]
WantedBy=multi-user.target
EOF

cat <<EOF | sudo tee /etc/systemd/system/Webify.timer > /dev/null
[Unit]
Description=Runs the Webify service for BTify every 5 minutes to make sure its running

[Timer]
OnBootSec=1min
OnUnitActiveSec=5min
Persistent=true
OnCalendar=daily

[Install]
WantedBy=timers.target
EOF
sleep 7
BLA::stop_loading_animation
clear
echo "Done!"
sleep 1
echo "Enabling/Starting the timer!"
sudo systemctl daemon-reload
sudo systemctl enable Webify.timer
sleep 2
echo "Done!"
echo "Setup Complete! You can now access the web server on port 3287!"
BLA::start_loading_animation "${BLA_snake[@]}"
sleep 5
BLA::stop_loading_animation
clear
exit 0