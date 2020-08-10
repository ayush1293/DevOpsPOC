FROM selenium/standalone-chrome
LABEL name="lighthouse" \
  maintainer="Ayushi Singh" \
  version="1.0" \
  description="Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices."

# Install Node.js
#RUN cd ~
WORKDIR /home/seluser
RUN curl  https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN sudo bash nodesource_setup.sh
RUN sudo apt install nodejs
#Install chrome 
#RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#RUN sudo dpkg -i google-chrome-stable_current_amd64.deb

USER root
#Install Lighthouse
RUN npm install -g lighthouse

USER seluser

# Command to run lighthouse for google.com
CMD echo "yes" | lighthouse --chrome-flags="--headless" https://google.com
