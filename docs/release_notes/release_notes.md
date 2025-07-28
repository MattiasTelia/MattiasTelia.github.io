# Release Notes Version 31

## ACE Web SDK Version 31.0.0

2025-05-23

### Compatible version of other components - MJ change in min_main

- ACE ClusterWare 31.0 or newer
- ACE Main Server 31.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 31.0 or newer
  - without meeting type specific video texts: 29.0
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 31.0 or newer
  - without meeting type specific video texts: 29.0
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.27

### New in this version

- ACET-48170 - Show meeting type (video and/or screen- and filesharing) when asking visitor to accept a meeting. ACE Video and Sharing meetings text has also been updated in the configuration file template. To only use the new texts in the configuration file template, there is no need to update the Web SDK version; just simply update the existing configuration files with new texts.
             
- ACET-49336 - Change how to display opening hours in order to comply to the WCAG standard

### Bugs corrected

- ACET-49337 - Focus handling disrupts tab order in widget

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.











# Release Notes Version 29

## ACE Web SDK Version 29.0.8

2025-04-25

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.26

### New in this version

- Various WCAG improvements

### Bugs corrected

- ACET-47088 - Chat history disappears when reloading page or navigating to another sub domain
- ACET-48732 - Contact method forms with criteria don't re-evaluate in Conversational Hub Widget
- ACET-48751 - Survey link is rendered multiple times when refreshing the page

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.












## ACE Web SDK Version 29.0.7

2025-03-25

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.21

### New in this version

- None

### Bugs corrected

- ACET-48691 - Conversational Hub Widget: Greeting text does not show after refreshing the page 

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.














## ACE Web SDK Version 29.0.6

2025-02-19

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.18

### New in this version

- None

### Bugs corrected

- ACET-48052 - Possible to selected previous dates for callback appointments in V5 bot using a hidden entrance

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.














## ACE Web SDK Version 29.0.5

2025-02-14

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.17

### New in this version

- ACET-47470 A Widget User can only select future dates in the callback form
- ACET-47590 A Widget Editor can use HTML links in greeting text

### Bugs corrected

- None

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.
















## ACE Web SDK Version 29.0.4

2025-01-27

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.13

### New in this version

- ACET-47103 Enable interaction with disabled contact methods

### Bugs corrected

- ACET-47089 The welcome message is displayed again when reloading page in Conversational Hub bot

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.


















## ACE Web SDK Version 29.0.3

2024-12-13

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.11

### New in this version

- ACET-46705 Enable cross domain functionality for One Widget chat
- ACET-46152, ACET-46156 - Adding configuration for greeting text in Conversational Hub bot

### Bugs corrected

- None

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.




















## ACE Web SDK Version 29.0.2

2024-11-04

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.7

### New in this version

- Various WCAG improvements

### Bugs corrected

- None

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.












## ACE Web SDK Version 29.0.1

2024-10-14

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.3.4

### New in this version

- Various WCAG improvements
- Bug fixes

### Bugs corrected

- ACET-42394  Contact method Link does not open on click in ACE One Widget Bot
- ACET-42162  Parameter for last active category is not populated in ACE One Widget

### Configuration file changes

- aceKnowledge.pluginTexts.chatConversation.*.chatDisconnected
- aceKnowledge.pluginTexts.chatConversation.*.chatReconnected

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.











## ACE Web SDK Version 29.0.0

2024-08-26

### Compatible version of other components

- ACE ClusterWare 29.0 or newer
- ACE Main Server 29.0 or newer
  - without Chat Disconnect Protection: 26.1
- ACE Chat Engine 29.0 or newer
  - without Chat Disconnect Protection: 26.1
  - without Onsite video: 20.0
- ACE Reference Chat Client 29.0 or newer
  - without Chat Disconnect Protection: 22.0
  - without Onsite video: 22.0
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.2.6

### New in this version

- Chat Disconnect Protection: Chat sessions survive network issues at ACE Chat Engine Server

### Bugs corrected

- None

### Configuration file changes

- aceKnowledge.pluginTexts.chatConversation.*.chatDisconnected
- aceKnowledge.pluginTexts.chatConversation.*.chatReconnected

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.























# Release Notes Version 28


## ACE Web SDK Version 28.1.1

2024-04-23

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.2.6

### New in this version

- ACE Knowledge Widgets updated from ACE Widgets 1.1.8 to 1.2.6
- Bug fixes
- Various WCAG improvements

### Bugs corrected

- ACET-41945: Chat history confirmation text is incorrectly formatted
- ACET-42060: Shared files cannot be downloaded in video sessions in One Widget

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.









## ACE Web SDK Version 28.1.0

2024-03-04

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 1.1.8 (ACE Widgets has got a new way of denote the version, ACE Widgets 1.1.8 is the same as ACE Widgets 22)

### New in this version

- ACE Knowledge Widgets updated from ACE Widgets 1.1.4 to 1.1.8
- Bug fixes
- Various WCAG improvements

### Bugs corrected

- ACET-11209: Lists in v5 widget comes with strange whitespace
- ACET-41605: Cannot enlarge video when starting a video meeting from v5 bot chat
- ACET-11173: Fix focus on widget via triggerbutton
- ACET-41855: Cannot use an email contact method if configuring the mail placeholder

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.








## ACE Web SDK Version 28.0.0

2024-02-05

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 18

### New in this version

- ACE Knowledge Widgets updated from ACE Widgets 17 to 18
- New widget type added, ACE Conversational Hub Widget, which enables integration with Dialogflow and Boost.ai
- Bug fixes

### Bugs corrected

- ACET-11107 (DEV-33769) - Not possible to communicate with the bot after page reload
- ACET-11108 (DEV-33604) - Email form for getting chat history is not displayed in bot

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.








# Release Notes Version 27




## ACE Web SDK Version 27.1.0

2023-11-29

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0) (without video: 20.1.1)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 17
- Opentok JavaScript library: @opentok/client 2.24.6

### New in this version

- Various WCAG improvements
- ACE Knowledge Widgets updated from ACE Widgets 15 to 17
- Bug fixes

### Bugs corrected

- ACET-1551 Meta contactdata key widgetOptionStartVideoChat is not filtered out before sending to Chat Engine
- ACET-10871 Failed language lookup crashes Web SDK

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- DEV-33769 Cannot start new chat if page was reloaded during chat.
- DEV-33604 Bot widget cannot send history by email to end user when chat is ended.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.
- ACET-11005 Exit chat button ('X') disappear in Safari browser after temporarily leaving the chat

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.










## ACE Web SDK Version 27.0.0

2023-10-06

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0) (without video: 20.1.1)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 15
- Opentok JavaScript library: @opentok/client 2.24.6

### New in this version

- Removed Google support in ACE Web SDK Insights (there are currently no tracking frameworks supported)
- Add support for Content Security Policy nonces to ACE One Widget chat plugin
- Content Security Policy information updated in Configuration Instructions (some CSP rules where missing before)
- Add Web SDK Knowledge plugins language translations for all supported languages (Swedish, English, Finnish, Norweigan, Danish, German) to config template file
- ACE Knowledge Widgets updated from ACE Widgets 13 to 15
- Bug fixes

### Bugs corrected

- ACET-1494 Close button not working in Chat with Local Production
- DEV-32972 Chat end button for inline chat widget plugin is not properly used when chat is ended by agent

### Configuration file changes

- None

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- DEV-33769 Cannot start new chat if page was reloaded during chat.
- DEV-33604 Bot widget cannot send history by email to end user when chat is ended.
- ACET-1564 Low impact CSP errors when open contact list

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.





















# Release Notes Version 26

## ACE Web SDK Version 26.1.1

2023-06-22

### Compatible version of other components

- ACE ClusterWare 26.1 or newer
- ACE Chat Engine 26.1 or newer (without Onsite video: 20.0)
- ACE Reference Chat Client 26.1 or newer (without Onsite video: 22.0) (without video: 20.1.1)
- ACE Cobrowsing Engine 20.0 or newer
- ACE Proactive Web Engine 20.0 or newer
- ACE Web API 21.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 13
- Opentok JavaScript library: @opentok/client 2.24.6

### New in this version

- DEV-28169 Web SDK is made compatible (with reduced features) with third party cookies being blocked in web browser.
- DEV-33392 ACE Onsite video can be maximized in One Widget chat client.
- DEV-33398 ACE Onsite video can be started automatically when starting a chat.
- ACE Knowledge Widgets updated from ACE Widgets 11 to 13.
- Bug fixes.

### Bugs corrected

- DEV-33869 One Widget Chatbot cannot end chat after folding widget.
- DEV-33346 Cannot end chat after back button has been pressed.

### Configuration file changes

- `ACEWebSDK.conf.singleDomain` added (default: false).

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*.

#### ACE Knowledge Widgets:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- DEV-33769 Cannot start new chat if page was reloaded during chat.
- DEV-32972 Cannot end chat when chat is ended by agent.
- DEV-33604 Bot widget cannot send history by email to end user when chat is ended.

#### ACE Cobrowsing:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

#### General:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Google Chrome:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- DEV-32634 Notification sound for new messages does not work for Apple devices.

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.

## ACE Web SDK Version 26.1.0

2023-05-12

### Compatible version of other components

- ACE ClusterWare 26.1.0 or newer
- ACE Chat Engine 26.1.0 or newer (without Onsite video: 20.0.0)
- ACE Reference Chat Client 26.1.0 or newer (without Onsite video: 22.0.0) (without video: 20.1.1)
- ACE Cobrowsing Engine 20.0.0 or newer
- ACE Proactive Web Engine 20.0.0 or newer
- ACE Web API 21.0.0 or newer
- ACE Knowledge Widgets v5

### This version of Web SDK contains

- ACE Knowledge Widgets: ACE Widgets 11 (includes fixes in ACE Widgets 5-11 compared to Web SDK 24.0.3)
- opentok/client 2.24.6

### New in this version

- ACE Onsite video
- Support for ACE One Widget Chatbot. Replaces ACE Chatbot Widget (v4)
- Removed support for ACE Online Widgets and Plugins version 4
- Play sound in One Widget chat client when new message arrives

### Bugs corrected

- DEV-29958 License files for Web SDK is missing

### Configuration file changes

- `aceKnowledge.chat.playChatNoticeSound` added (default: false).

### Limitations

For details on browser support, see *Configuration Instructions ACE Web SDK*

**Online Widgets**:

- No support for ACE Online Widgets and Plugins version 4. To use this version of Web SDK, v4 widgets need to be upgraded to One Widget.
- DEV-33452 Cannot start new chat if chat widget is not closed properly and web page is reloaded after ended chat
- DEV-33769 Cannot start new chat if page was reloaded during chat
- DEV-33346 Cannot end chat after back button navigation has been used
- DEV-32972 Cannot end chat when chat is ended by agent
- DEV-33604 Bot widget cannot send history by email to end user when chat is ended
- DEV-31733 Bot widget error messages are clipped
- DEV-33936 Bot widget history disappears after page reload
- DEV-32634 Notification sound for new messages does not work for Apple devices

**General**:

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

**Safari**:

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

**iOS**:

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
-

**Google Chrome**:

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

**ACE Cobrowsing**:

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Chat
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Release Notes ACE Reference Chat Client
- Release Notes ACE Knowledge Widgets
- https://ace-showcase.com/help-hub/

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip file. Unzip and move to Web Distribution Server.

# Release Notes Version 24

## ACE Web SDK Version 24.0.3

Release date: 2022-10-04

### New in this version of Web SDK:

- ACE Web SDK OneWidget Plugin is updated with ACE Knowledge Widgets 4. See Knowledge release notes for info about new functionality and bug fixes.

- DEV-29241 Remove Cobrowsing agent page small screen warning.

For Compatible version of other components, Limitations, Related documents and Installation information, see Release Notes ACE Web SDK Version 24.0.2.

## ACE Web SDK Version 24.0.2

Release date: 2022-08-29

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

#### Updated packages in this release:

- OpenTok (@opentok/client) 2.23.2

#### Same package versions as in previous release of Web SDK:

- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.18
- ACE Floating Widget (@humany/widget-types-floating) 1.0.56
- ACE Inline Widget (@humany/widget-types-inline) 1.0.48
- ACE One Widget (@humany/widget-types-grid) 1.2.10
- @humany/widget-conversation 2.1.25
- @humany/widget-plugins 2.3.11

### New functionality

- None

### Bugs corrected in this version

- None

### Configuration file changes

- None

### Web application for callback appointments

- See separate release notes for Web application for callback appointments.

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-ar

## ACE Web SDK Version 24.0.1

Release date: 2022-05-25
<br>
Updated: 2022-05-30

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

#### Updated in this release:

- @humany/widget-conversation 2.1.25
- @humany/widget-plugins 2.3.11

#### Same versions as in previous release of Web SDK:

- OpenTok (@opentok/client) 2.21.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.18
- ACE Floating Widget (@humany/widget-types-floating) 1.0.56
- ACE Inline Widget (@humany/widget-types-inline) 1.0.48
- ACE One Widget (@humany/widget-types-grid) 1.2.10

### New functionality

- None

### Bugs corrected in this version

- DEV-28172 OneWidget contact method does not work

### Configuration file changes

- None

### Web application for callback appointments

- See information for Web SDK 24.0.0

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-ar

## ACE Web SDK Version 24.0.0

Release date: 2022-05-16
<br>
Updated: 2022-05-24

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.21.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.18
- ACE Floating Widget (@humany/widget-types-floating) 1.0.56
- ACE Inline Widget (@humany/widget-types-inline) 1.0.48
- ACE One Widget (@humany/widget-types-grid) 1.2.10

### New functionality

- DEV-25989 Disable external OneWidget chat form validation
- DEV-26047 Cobrowsing default styles can be overridden
- DEV-25600 Cobrowsing responsive popup dialog
- DEV-26049 Cobrowsing improved image handling
- DEV-26057 Cobrowsing improved link menu on agent page

### Bugs corrected in this version

- DEV-27196 Chat API fails to start chat when network is slow
- DEV-27154 One day is missing in One Widget opening hours (and one day is displayed twice)
- DEV-27141 Favorite links on Cobrowsing Agent page are broken
- DEV-26439 Authenticated chat default configuration breaks the function

### Configuration file changes

- New configuration of authToken (backward compatible so old configuration also works).
- `aceKnowledge.disableDefaultValidation` can be used to disable external chat form validation.
- See template file and *Configuration Instructions ACE Web SDK* for help and samples.

### Web application for callback appointments

Updated: 2022-05-24

- Version 1.2.0
- Configuration `texts.stepTwo.body`: The body can now be appended in two ways, either as a string, so it's the same for all errands or as an object where the specific errand name(s) controls the string.
- Configuration `texts.stepTwo.fields.placeholder`: The placeholder can now be appended in two ways, either as a string, so it's the same for all errands or as an object where the specific errand name(s) controls the string.
- Configuration changes:
  - See above.
- Requires
  - ACE Web API 23 or newer
  - ACE Main Server 23 or newer
  - ACE Interface Server 23 or newer

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

# Release Notes Version 23

## ACE Web SDK Version 23.0.2

Release date: 2022-04-05

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.21.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.11
- ACE Floating Widget (@humany/widget-types-floating) 1.0.49
- ACE Inline Widget (@humany/widget-types-inline) 1.0.41
- ACE One Widget (@humany/widget-types-grid) 1.2.5

### New functionality

\-

### Bugs corrected in this version

- DEV-27196 Chat client fail to load when network is slow

### Configuration file changes

\-

### Web application for callback appointments

- See information for Web SDK 23.0.0

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 23.0.1

Release date: 2022-01-31  
Updated 2022-03-08

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.21.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.11
- ACE Floating Widget (@humany/widget-types-floating) 1.0.49
- ACE Inline Widget (@humany/widget-types-inline) 1.0.41
- ACE One Widget (@humany/widget-types-grid) 1.2.5

### New functionality

- DEV-22888 Cobrowsing improved accessibility
- UNO-238 A Developer can configure HTML Heading rules for One Widget
- UNO-401 A Widget Administrator can use the Web Service contact method in v4.1
- 2022-03-08: Changes in the stand-alone web page for callback appointments, version 1.1.0, see below.

### Bugs corrected in this version

- DEV-24413 Cobrowsing texts can not be changed
- DEV-25630 Backwards compatibility with Reference Chat Client is broken
- UNO-223 Multiple time spans within same day should display all available times
- UNO-304 NotificationLists & NotificationRow should render data independently of other components
- UNO-402 Required DropDownList components should not allow empty value

### Configuration file changes

\-

### Web application for callback appointments

Updated 2022-03-08:

- Version 1.1.0
- Upgraded packages
- Configuration changes
  - `texts.errands[]` - New required field called `name`. This value is used to control `texts.stepTwo.fields.optional`.
  - `texts.errands[]` - If any of the required values is missing the errand won't render.
  - `texts.stepTwo.fields.optional` - This field no longer listens for `schedule`, it now listens for the new `name` value from errands.
- Requires
  - ACE Web API 23 or newer
  - ACE Main Server 23 or newer
  - ACE Interface Server 23 or newer

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 23.0.0

Release date: 2021-11-30

### Compatible version of other components:

ACE Chat Engine 20.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 20.1.1 or newer)  
ACE ClusterWare 23.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4.1 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.21.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.9
- ACE Floating Widget (@humany/widget-types-floating) 1.0.47
- ACE Inline Widget (@humany/widget-types-inline) 1.0.39
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.10
- ACE One Widget (@humany/widget-types-grid) 1.2.3
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.4.3

### New functionality

- DEV-19512 Chat messages can be sent while waiting in queue
  (configurable)
- DEV-19515 The periodicity of queue messages can be increased to any multiple of 30 seconds
- DEV-21639 Accessibility improvements in the stand-alone web page for callback appointments

### Configuration file changes

- In config_services.js, ACE Knowledge implementations for One Widget
  (v5 implementations) can have a new property
  `chat.enableWritingWhileInQueue`.
- The same parameter can be defined for v4 implementations of ACE Knowledge, but setting that parameter to `true` is NOT supported. The functionality to send messages while in queue is not available for v4 widgets.
- See the template file and *Configuration Instructions ACE Web SDK* for help and samples.

### Web application for callback appointments

- Version 1.0.0
- WCAG 2.1 AA (not fully verified yet)
- Improved error handling
- Requires
  - ACE Web API 23 or newer
  - ACE Main Server 23 or newer
  - ACE Interface Server 23 or newer

### Bugs corrected in this version

- UNO-164 Widget should not display loader when replacing pre-rendered content from SEO Service
- UNO-167 Title in GuideListComponent should not append empty leading space
- UNO-257 Tags should appear in the order specified by remote service
- DEV-22392 Weekdays in opening hours in contact methods in Norwegian widgets are not shown in Norwegian
- DEV-23763 Long lines in opening hours in One Widget floating does not fit within the widget
- DEV-23052 Callback contact method in One Widget does not work if the widget's language not is defined in plugin configuration

### General limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin](https://ace-showcase.com/ace-help-hub/knowledgebase/#humany-ace-help-hub=/c202-ace-admin)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

# Release Notes Version 22

## ACE Web SDK Version 22.0.0

Release date: 2021-07-05

### Compatible version of other components:

ACE Chat Engine 18.0.0 or newer  
ACE Cobrowsing Engine 10.0.0 or newer  
ACE Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 22.0.0 or newer (without video chat 18.0.2 or newer)  
ACE ClusterWare 21.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.20.0
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.9
- ACE Floating Widget (@humany/widget-types-floating) 1.0.47
- ACE Inline Widget (@humany/widget-types-inline) 1.0.39
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.9
- ACE One Widget (@humany/widget-types-grid) 1.2.2
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.4.2

### New functionality

- DEV-18681 Improved error handling and better user experience in ACE Video Chat.
- DEV-19525 One Widget as chat client (fully WCAG 2.1 AA compliant) with all data communication bounded to Sweden.
- DEV-18364 Stand-alone web application for callback appointments.

### Configuration file changes

- In config_services.js, ACE Knowledge implementations for One Widget chat client as in DEV-19525 must have a new property
  `localProduction`.
- config_services:chat.video.logging.logErrorsToChatEngine
- See the template file and *Configuration Instructions ACE Web SDK* for help and samples.

### (Updated 2021-12-06) Web application for callback appointments

- Version 0.1.0
- Requires
  - ACE Web API 21 or newer
  - ACE Main Server 21 or newer
  - ACE Interface Server 21 or newer

### Bugs corrected in this version

- Various bug fixes and improvements in Knowledge Widgets. See ACE Knowledge Release Notes.
- DEV-20865 Video chat errors are not detected and presented to visitor in chat client.

### General Limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

# Release Notes Version 21

## ACE Web SDK Version 21.1.0

Release date: 2021-06-11

### Compatible version of other components:

ACE Chat Engine 18.0.0 or newer  
ACE Cobrowsing Engine 10.0.0 or newer  
ACE Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 18.0.2 or newer  
ACE ClusterWare 21.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.19.3
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.8
- ACE Floating Widget (@humany/widget-types-floating) 1.0.46
- ACE Inline Widget (@humany/widget-types-inline) 1.0.38
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.8
- ACE One Widget (@humany/widget-types-grid) 1.2.0
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.3.0

### New functionality

- DEV-19946 In One Widget Contact Methods, queue status and opening hours can be removed.
- A new way to visualize categories and subcategories in One Widget Floating. With this setting, the top categories are shown horizontally in a scrollable list and the subcategories are displayed directly below the main categories as smaller buttons.
- The Accordion in One Widget has been redesigned and various improvements have been made.
- Backlinks in One Widget in mobile mode are replaced with mobile-adapted breadcrumbs.
- Improvements to the category selector in mobile mode in One Widget.

### Configuration file changes

- In config_services.js, ACE Knowledge implementations with version 5, the property `suppressContactCentreStatus` (boolean) may be added. If the value is `false` (default, if the property not is defined) the queue status and opening hours are shown. If `true` they are not shown.

### Bugs corrected in this version

- DEV-20176 If third-party tracking prevention blocks the Web SDK id-system, Knowledge Online Widgets do not load.
- DEV-19882 Cobrowsing creates an element with duplicate id attribute.
- DEV-19761 The conversation with a chatbot, preceding a chat with customer service, is not complete when the user uses a Safari browser.
- DEV-19699 Customer names with special characters, like &, <, >, and "
  are displayed as the verbatim html entities (e.g. `&lt;` instead of <).
- DEV-19669 Contact data with illegal characters are removed before a chat is started in v.4 Online Widgets, which prevents Chat Engine 18 or older from crashing. (A corresponding fix for v.5 is previously released).
- Various bug fixes and improvements in One Widget. See ACE Knowledge Release Notes.

### General Limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 21.0.1

Release date: 2021-05-06

### Compatible version of other components:

ACE Chat Engine 18.0.0 or newer  
ACE Cobrowsing Engine 10.0.0 or newer  
ACE Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 18.0.2 or newer  
ACE ClusterWare 21.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.19.3
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.7
- ACE Floating Widget (@humany/widget-types-floating) 1.0.45
- ACE Inline Widget (@humany/widget-types-inline) 1.0.37
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.6
- ACE One Widget (@humany/widget-types-grid) 1.1.3
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.2.10

### New functionality

\-

### Configuration file changes

\-

### Bugs corrected in this version

- DEV-19347, SUP-439 In mobile view, agent messages does not automatically open the chatbot after page load with ongoing chat.
- DEV-19419, SUP-558 There is no way to close the chat form, if opened and no chat is started (the user changes his mind).
- DEV-19548 Content Security Policy as meta-tag might destroy the layout in the agent's cobrowsing view.
- SUP-645 Increase contrast in chatbot.
- SUP-644 Unable to save guides.
- SUP-634 List notifications only shown in desktop mode.
- SUP-635 &take=#-parameter in accordion guides in One Widget leads to unwanted behaviour.
- SUP-660 Original guide is not supposed to be editable when translating.
- OVR-3520 Handling of curly brackets in SEO.

### General Limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 21.0.0

Release date: 2021-04-09

### Compatible version of other components:

ACE Chat Engine 18.0.0 or newer  
ACE Cobrowsing Engine 10.0.0 or newer  
ACE Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 18.0.2 or newer  
ACE ClusterWare 21.0.0 or newer  
ACE Web API 21.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.19.2
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.6
- ACE Floating Widget (@humany/widget-types-floating) 1.0.45
- ACE Inline Widget (@humany/widget-types-inline) 1.0.37
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.5
- ACE One Widget (@humany/widget-types-grid) 1.1.2
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.2.9

### New functionality

- API functions for preliminary and final bookings of Callback Appointments.
- Possibly breaking changes in Web SDK Core API (deprecated error codes, removed configuration, removed result properties). See Change Log in ACE Web SDK Core API chapter in *Configuration Instructions ACE Web SDK* for more details.
- Content Security Policy (CSP) guidelines are documented in
  *Configuration Instructions ACE Web SDK*.
- Cookie usage and other web browser storage required for ACE Web SDK are documented in *Configuration Instructions ACE Web SDK*, in order to support creation of a cookie policy statement for websites including ACE Web SDK.

### Configuration file changes

- Default configuration properties `aceWebApi.callback`, `aceWebApi.queueStatus`
  and `aceWebApi.openingHours` are removed.

### Bugs corrected in this version

- DEV-18229, SUP-562 Contact method description is not shown in OneWidget.
- DEV-18628, SUP-520 Characters not allowed in ACE contact data name in ACE Knowledge are not properly handled.
- DEV-18146 After creating a time-specified callback in ACE Knowledge it is not possible to create an immediate callback.
- SUP-556 Knowledge guide links cannot be opened in One Widget chat.
- A number of bugfixes in ACE Knowledge Widgets, see separate release documentation for ACE Knowledge.

### General Limitations

- For details on browser support, see *Configuration Instructions ACE Web SDK*.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- DEV-18759 srcset attribute is not handled correctly in cobrowsing.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

# Release Notes Version 20

## ACE Web SDK Version 20.1.0

Release date: 2021-02-19

### Compatible version of other components:

ACE Main Server 20.0.0 or newer  
ACE Chat Engine 20.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 20.1.0 or newer (for full Insights support)  
ACE ClusterWare 20.0.0 or newer  
ACE Web API 20.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.19.0
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.4
- ACE Floating Widget (@humany/widget-types-floating) 1.0.43
- ACE Inline Widget (@humany/widget-types-inline) 1.0.35
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.4
- ACE One Widget (@humany/widget-types-grid) 1.0.6
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.2.5

### New functionality

- EU Proxy for video chat, ensures that only anonymized data leaves the EU. (The actual media streams have always been confined to the EU.)
- ACE Web SDK Insights. Anonymized statistics can be sent to e.g. Google Analytics or web browser events.

### Configuration file changes

- The `chat.video` object must set the property `ipProxy:
  'https://euproxy.opentok.com'`.
- If IP whitelisting for video chat is considered, please note that the
  `ipWhitelist` option is a property to the object
  `chat.video.openTokInitSessionOptions` object.
- The feature toggle for ACE Web SDK Insights has changed name to
  `enableInsights`, instead of `enableGoogleAnalytics`.
- The configuration object `googleAnalytics` is changed to `insights`. The `insights` configuration object has more options, see the
  `config_services.template.js` file.
- For backwards compatibility, the old feature flag
  (`enableGoogleAnalytics`) and configuration object (`googleAnalytics`)
  can still be used, limiting the functionality to only Google Analytics.

### Bugs corrected in this version

- DEV-16877 A minimized chatbot does not open automatically on agent messages after a page load.
- DEV-17176 CSS for headers in chatbot and floating (v4) does not work.
- DEV-17252 Change camera in video meeting in combination with switching between text and video mode causes the published video to fail.
- DEV-17619 Opening hours in English in Knowledge Contact Methods take too much space, causing illogical line breaks.
- ALM-19628 Cobrowsing shows "communication lost" when a session is terminated normally.
- SUP-496 When a page with an active chatbot is loaded the conversation is scrolled to the top (beginning) instead of the end.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- SUP-556 Knowledge guide links cannot be opened in One Widget chat.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot Widget and ACE One Widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.
- On iPhone, rotating video chat 90 degrees does work, but 180 degrees does not work.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 20.0.0

Release date: 2020-11-30

### Compatible version of other components:

ACE Main Server 20.0.0 or newer  
ACE Chat Engine 20.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
ACE Cobrowsing Engine 20.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Proactive Web Engine 20.0.0 or newer  
ACE Reference Chat Client 15.0.1 or newer  
ACE ClusterWare 20.0.0 or newer  
ACE Web API 20.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.18.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.2
- ACE Floating Widget (@humany/widget-types-floating) 1.0.41
- ACE Inline Widget (@humany/widget-types-inline) 1.0.33
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.1
- ACE One Widget (@humany/widget-types-grid) 1.0.3
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.1.3

### New functionality

- ACE Knowledge chatbot conversation is transferred to the agent when a chat with customer service is started.

### Configuration file changes

- New boolean property `chat.enableConversationHistoryTransfer` in objects in array `conf.aceKnowledge` for ACE Knowledge version 4 configuration objects. The new property controls if chatbot history is sent to agent in chat conversations with customer service. If omitted, the default value is `false`.

### Bugs corrected in this version

- DEV-15833 Navigating when email offer is shown, and then going back, sometimes removes the email form in Safari.
- ALM-19610 Chat bot and floating (v4) header info is hidden during queue and chat.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- DEV-14029 Tracking for Google Analytics doesn't support the gtag.js implementation, only analytics.js can be used. However, appending site tracker(s) within the `googleAnalytics.OtherTrackerNames` config is not supported in this release.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.
- On iPhone, rotating video chat 90 degrees does work, but 180 degrees does not work.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

# Release Notes Version 18

## ACE Web SDK Version 18.1.2

Release date: 2020-12-11

### Compatible version of other components:

ACE Main Server 18.0.0 or newer  
CallGuide Chat Engine 14.0.0 or newer  
ACE Chat Engine 17.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 15.0.1 or newer  
ACE ClusterWare 18.0.0 or newer  
ACE Web API 16.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.18.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.3
- ACE Floating Widget (@humany/widget-types-floating) 1.0.42
- ACE Inline Widget (@humany/widget-types-inline) 1.0.34
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.4.2
- ACE One Widget (@humany/widget-types-grid) 1.0.5
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.2.2

### New functionality

- New api function `CallGuide.api.chat.getState`.

### Configuration file changes

\-

### Bugs corrected in this version

- ACE Knowledge bugbash 17.4.13, including for example:
  - SUP-449 Handover to manual chat from inline widgets does sometime not work.
  - SUP-463 Notifications on contact methods in One Widget briefly flashes and disappears.
- ALM-19628 Cobrowsing shows "communication lost" when a session is terminated normally.
- ALM-19610 Chat bot and floating (v4) header info is hidden during queue and chat.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- DEV-14029 Tracking for Google Analytics doesn't support the gtag.js implementation, only analytics.js can be used. However, appending site tracker(s) within the `googleAnalytics.OtherTrackerNames` config is not supported in this release.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 18.1.1

Release date: 2020-10-23

### Compatible version of other components:

ACE Main Server 18.0.0 or newer  
CallGuide Chat Engine 14.0.0 or newer  
ACE Chat Engine 17.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 15.0.1 or newer  
ACE ClusterWare 18.0.0 or newer  
ACE Web API 16.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.18.1
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.1
- ACE Floating Widget (@humany/widget-types-floating) 1.0.40
- ACE Inline Widget (@humany/widget-types-inline) 1.0.32
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.3.2
- ACE One Widget (@humany/widget-types-grid) 1.0.2
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.1.1

### New functionality

- ACE One Widget can be used as chat client, even if ACE Knowledge functionality not is used. ACE One Widget is WCAG 2.1 AA compliant, and can replace ACE Reference Chat Client in many solutions. See
  [support.humany.net](https://support.humany.net/self-service-portal-internal/one-widget-som-fristaende-ace-chat/1083).
- A web page can define a whitelist of ACE Knowledge implementations. Only the implementations in config_services.js also found in the whitelist will be loaded.
- The chat API includes objectId (the event sequence number) in most events.

### Configuration file changes

\-

### Bugs corrected in this version

- Deviations from WCAG 2.1 AA in ACE Chatbot.
- ALM-19578 Spurious error logging from Proactive Web.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

#### General

- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- DEV-14029 Tracking for Google Analytics doesn't support the gtag.js implementation, only analytics.js can be used. However, appending site tracker(s) within the `googleAnalytics.OtherTrackerNames` config is not supported in this release.

#### Safari

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for ACE Chatbot widget to be WCAG 2.1 AA compliant.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.

#### Chrome

- In Incognito mode, ACE Web SDK functions do not work, unless the setting `Block third-party cookies in Incognito` is changed to `Allow all cookies`.

#### iOS

- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.

#### Cobrowsing

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at [http://docs.ace.teliacompany.com](http://docs.ace.teliacompany.com)

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 18.1.0

Release date: 2020-09-18

### Compatible version of other components:

ACE Main Server 18.0.0 or newer  
CallGuide Chat Engine 14.0.0 or newer  
ACE Chat Engine 17.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 15.0.1 or newer  
ACE ClusterWare 18.0.0 or newer  
ACE Web API 16.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.18.0
- ACE Chatbot Widget (@humany/widget-types-bot) 1.1.0
- ACE Floating Widget (@humany/widget-types-floating) 1.0.39
- ACE Inline Widget (@humany/widget-types-inline) 1.0.31
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.3.1
- ACE One Widget (@humany/widget-types-grid) 1.0.1
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.0.10

### New functionality

- U/UX improvements in ACE Chatbot Widget, in order to meet WCAG requirements.
- DEV-15317 OpenTok IP white listing and other OpenTok parameters can be configured in the Web SDK configuration.

### Configuration file changes

- New option `chat.video.ipProxy`.
- New option object, `chat.video.openTokInitSessionOptions`. The format of the object can be found in the OpenTok documentation for InitSession. If IP whitelisting shall be used, it has to be enabled here.
- If any of these two new parameters are undefined, default values will be used. Hence, if whitelisting or proxy not shall be used, no change is required.
- New text for agent is typing in aceKnowledge:
  `pluginTexts.chat.`*language*`.agentIsTyping`.

### Bugs corrected in this version

- ALM-19573 The agent's cobrowsing client crashes if Google Analytics is enabled.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

- In Safari, the option `Press Tab to highlight each item on a web page`
  has to be checked in order for the chatbot widget to be WCAG 2.1 AA compliant.
- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.
- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- DEV-14029 Tracking for Google Analytics doesn't support the gtag.js implementation, only analytics.js can be used. However, appending site tracker(s) within the
  `googleAnalytics.OtherTrackerNames` config is not supported in this release.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at https://docs.ace.teliacompany.com

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.

## ACE Web SDK Version 18.0.0

Release date: 2020-06-26

### Compatible version of other components:

ACE Main Server 18.0.0 or newer  
CallGuide Chat Engine 14.0.0 or newer  
ACE Chat Engine 17.0.0 or newer  
CallGuide Cobrowsing Engine 10.0.0 or newer  
CallGuide Proactive Web Engine 10.0.0 or newer  
ACE Reference Chat Client 15.0.1 or newer  
ACE ClusterWare 18.0.0 or newer  
ACE Web API 16.0.0 or newer  
ACE Knowledge Implementation Versions 4 and 5

### This version of ACE Web SDK contains:

- OpenTok (@opentok/client) 2.17.3
- ACE Chatbot Widget (@humany/widget-types-bot) 1.0.36
- ACE Floating Widget (@humany/widget-types-floating) 1.0.34
- ACE Inline Widget (@humany/widget-types-inline) 1.0.26
- Plugins for ACE Widgets v4 (@telia-ace/humany-plugins) 1.2.2
- ACE One Widget (@humany/widget-types-grid) 1.0.0
- Plugins for ACE One Widget v5 (@telia-ace/one-widget-plugins) 2.0.9

### New functionality

- DEV-13348 ACE One Widget and all plugins required for contact method integration with ACE Contact Centre.
- DEV-9026 Change camera in video chat.
- DEV-14029 Support for Google Analytics reporting of ACE Web SDK related events.
- DEV-13904 When ordering callback from ACE Online Widgets, excess zeros at the beginning of the number are stripped away.

### Configuration file changes:

- New feature toggle `enableGoogleAnalytics`.
- Configuration section for Google Analytics.
- Feature name change: `loadACEKnowledge` -> `loadACEKnowledge_v4`. Enables loading of Online Widgets version 4 (bot, floating, and inline).
- New feature `loadACEKnowledge_v5` enables loading of ACE One Widget.
- aceKnowledge configuration: In each entry (object) in the array, the version property (`v4` or `v5`) has to be specified. The object format for `v4` is the same as aceKnowledge objects in previous versions of ACE Web SDK (plus the new version property). Items in the array with version `v5` have a new format.

### Bugs corrected in this version

- DEV-14237 Avoid a cross-site scripting vulnerability in jQuery.
- ALM-19336, DEV-14072 Implementation-specific style changes made in ACE Knowledge Admin does not always take effect.
- DEV-10824 Chat from ACE Online Widgets is interrupted if an attempt to start a chat is made in another window.

### General Limitations

- For details on browser support, see Configuration Instructions ACE Web SDK.

### Specific limitations

- In cobrowsing, the content of iframes might not be the same in the agent’s browser as in the visitor’s browser.
- Elements with styling (CSS) created by using styled-components loose all their styling on the agent's page in the cobrowsing. ACE One Widget (Online Widgets version 5) relies on styled-components, and is therefore rendered without styling in the agent's view.
- ALM-16507 Cobrowsing might not work correctly if the website uses responsive design. The device-related media queries, such as max/min-device-width/height, might cause different layout in the agent’s browser since the devices might be different. Note: the device-related media queries are deprecated from the CSS specification.
- ALM-19302 If a web page uses Custom Elements, these elements are not interpreted at the agent, resulting in a broken page.
- ALM-16687 In private browsing mode on Safari (macOS and iOS), ACE Web SDK functions are interrupted if the page is reloaded or navigated. E.g. if a chat is in progress, it will be reset and lost if the page is reloaded.
- ALM-17615 Cobrowsing might not work correctly if the end user zooms in the web browser.
- ALM-18004, ALM-18081, ALM-18087 On Safari (macOS), if browser setting
  "Prevent cross-site tracking" is enabled (which is the default) a page reload, or navigation, might cause interruptions in ACE Web SDK functions, such as a reset of an ongoing chat session.
- ALM-18033 On any browser (iOS), opening the chat in more than one browser tab may lead to unexpected behavior.
- ALM-18239 Pop out chat to new window feature is disabled for Safari because of browser behavior.
- ALM-18447 For multi-tenant systems, the pop-out window in ACE Reference Chat Client does not work.
- DEV-14029 Tracking for Google Analytics doesn't support the gtag.js implementation, only analytics.js can be used. However, appending site tracker(s) within the
  `googleAnalytics.OtherTrackerNames` config is not supported in this release.

### Related documents

- Release Notes ACE Reference Chat Client
- Configuration Instructions ACE Web SDK
- Configuration Instructions ACE Reference Chat Client
- Configuration Instructions ACE Web Distribution Server
- Online manual for ACE Admin at https://docs.ace.teliacompany.com

### Installation information

- The runtime part of ACE Web SDK is delivered as a zip-archive. The archive shall be extracted on ACE Web Distribution Server. Also, a zip archive containing a debug version is available. Normally the debug version shall not be installed. How to create and configure ACE Web SDK instances on the Web Distribution Server is described in Configuration Instructions ACE Web Distribution Server.
- If the website already has ACE widgets, it is recommended to remove the installation code for ACE widgets (Humany embed.js), since ACE widgets are loaded from ACE Web SDK. Also, for new installations, installation code for ACE widgets does not have to be added to the web pages.
