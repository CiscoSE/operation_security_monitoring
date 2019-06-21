# Operation Security Monitoring

*Project for the MEA Innovation Challenge Dubai - Challenge Nr 7 - Sandro Fasser*
---

## Motivation

The customer has over 100 VMs, with the majority of these being Windows based. These are used by partners for developing applications and integrations.

Many of these apps can have applications require remote access and support, yet no login details of these sessions are available. The solution which should be used to have control over the credentials is WebEx Remote access only (i.e., no TeamViewer access)

Need to leverage the security architecture in the IC to have a comprehensive monitoring of all application logins, application status and proactive detection of that. Ability to query information about any user using a chatbot or a web interface to find out the availability of the tool.

## Show Me!

See below the high-level project workflow:

<img width="995" alt="image" src="https://user-images.githubusercontent.com/43951925/59883949-fe392680-93b6-11e9-9f81-4239848ac3c3.png">


## Features

- Splunk monitors the hosts to collects syslog and host monitor data needed to feed the dashboard
- The Dashboard gives visibility in who logged in and where + Timestamps
- Also its visible what processes/apps are running on the hosts monitored
- The solution is also ready for more future use cases with more data also to get data from Stealthwatch
- Umbrella blocks Teamviewer and informs about other Remote Control Tools which should be blocked (AppDiscovery)


## Technologies & Frameworks Used
**Cisco Products & Services:**

- Cisco Umbrella
- Ready for future use with Stealthwatch 

**Third-Party Products & Services:**

- Splunk Enterprise and Universal Forwarder

**Tools & Frameworks:**

- Splunk Enterprise
- Cisco Umbrella AppDiscovery
- Microsoft Code
- XML Framework

## Usage

In general, the configuration for the IXC Dashboard (.xml) can be imported in the Splunk GUI. To work it has to be adapted to the appropriate IP range as well as the Hostnames. There are other possibilities to customize and change it to show a lot of different kind of data. Before it can be used the Splunk Server has to be configured as well as the Universal Forwarders have to be installed on the hosts who will be monitored (the main configuration for the Forwarders differing from the default can be found in the two configuration files in the "SplunkForwarderConfig" folder). To get more information and the whole technical Documentation on how to configure everything step by step, please contact me directly.

## Installation

Here are the high-level steps on how to install and deploy the project:

1. Install and configure Splunk Enterprise on a Server
2. Install and configure the Forwarders to send the appropriate data to the Server
3. Configure the Dashboard to made the Logins and also all the processes running on all the hosts visible
4. Add policies which stop the usage of TeamViewer to the hosts in the Umbrella Dashboard (AppDiscover and Blocking)

Splunk installation setups can be found here (needs registration): https://www.splunk.com

To get more information and the whole technical Documentation on how to configure everything step by step, please contact me directly as this documentation contains some internal information that cant be shared on github.

## Authors & Maintainers

(Smart) People responsible for the creation and maintenance of this project:

- Sandro Fasser <sfasser@cisco.com>

## Credits

Thanks especially to Haya Alzeer and Yaman Hakmi as well as Viktor Kirchev, Abdelbar Aglagane, Nicolas Cervigni and the rest of the IXC Team for the support and the always constructive and helpful feedback. Also helpfull was always the Splunk Community and help documents: https://www.splunk.com/en_us/community.html

## License

This project is licensed to you under the terms of the [Cisco Sample
Code License](./LICENSE).
