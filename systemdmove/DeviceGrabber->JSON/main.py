from btsmarthub_devicelist import BTSmartHub
import json
import os
import re
smarthub = BTSmartHub(router_ip='192.168.1.254', smarthub_model=2)
device_list = smarthub.get_devicelist(
   only_active_devices=True, 
   include_connections=True)


with open("devices.json", "w", encoding="utf-8") as f:
  json.dump(device_list, f, indent=2)
  os.system('cls' if os.name == 'nt' else 'clear')
  print( )
  print( )
  print( )
  print( )
  print( )
  print( )
  print( )
  print("Written!")
  print( )
  print( )
  print( )


with open("devices.json", "r", encoding="utf-8") as f:
    devices = json.load(f)   # ← this is already a list of dicts

active_true = sum(1 for d in devices if d.get("Active") is True)
active_false = sum(1 for d in devices if d.get("Active") is False)

print(f"Active = true : {active_true}")
print(f"Active = false: {active_false}")