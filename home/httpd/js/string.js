<script>

var TAB_CODE=9
var DEL_CODE=46 
var BS_CODE=8
var SP_CODE=32
var DOT_CODE=190
var DOT2_CODE=110

var IDX_ON=0
var IDX_OFF=1

var IDX_AP_MODE=0
var IDX_CBRIDGE_MODE=1
var IDX_WWAN_MODE=2
var IDX_KAI_MODE=3
var IDX_MBRIDGE_MODE=4


var WIRELESS_AP_MODE=0;
var WIRELESS_CBRIDGE_MODE=1;
var WIRELESS_CWAN_MODE=2;
var WIRELESS_KAI_MODE=3;
var WIRELESS_MBRIDGE_MODE=4;

var KAID_MODE_INIT=0  // ap mode
var KAID_MODE_PSP=0 // psp kai
var KAID_MODE_NORMAL=0 // xbox kai

var AUTH_OPEN=1
var AUTH_KEY=2
var AUTH_AUTO=3
var AUTH_WPA=4
var AUTH_WPAPSK=5
var AUTH_OPEN8021X=6
var AUTH_WPANONE=7
var AUTH_WPA2=8
var AUTH_WPA2PSK=9
var AUTH_WPAPSKWPA2PSK=10
var AUTH_WPAWPA2=11
var AUTH_NOCHANGE=100


var IDX_NOENC=0
var IDX_WEP64=1
var IDX_WEP128=2
var IDX_TKIP=3
var IDX_AES=4
var IDX_TKIPAES=5

var ENCRYPT_OFF=0
var ENCRYPT_64=1
var ENCRYPT_128=2
var ENCRYPT_TKIP=3
var ENCRYPT_AES=4
var ENCRYPT_TKIPAES=5

var KEY_STRING=0;
var KEY_HEX=1;

var IDX_KEY_STRING=0;
var IDX_KEY_HEX=1;

var REGION_USA=1;
var REGION_JAPAN=2;

var DMZTWINIP_MODE_DMZ=1;
var DMZTWINIP_MODE_TWINIP=2;

var QOS_SHARING_BOUNDED=2;
var QOS_SHARING_BORROW=3;


var MSG_RESTART_CONFIRM_DEFAULT='������ ������ �ʱ�ȭ�ϸ�, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_UPNP='UPNP������ �����ϸ�, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_REBOOT='�����Ⱑ ����۵˴ϴ�. ����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_CHANGE_LANIP='���� IP�ּ� �� DHCP������ ���� IP �ּҹ����� ���� ��,  �����Ⱑ ����� �˴ϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_CHANGE_LANIP_FAKE_TWINIP='TwinIP�� ������ ��쿡�� TwinIP ������ �����ǰ�\n���� IP�ּ� �� DHCP������ ���� IP �ּҹ����� ���� ��, �����Ⱑ ����� �˴ϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_RESTORE='������ ������ �� �����Ⱑ ����۵˴ϴ�.\n ����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_NAT='���ͳ� ������� ������ �����ϸ�, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_WIRELESS='���� ���� ��� ����ÿ���, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_KAID_MODE_CHANGE_WARNING='ī�� ���� ��� ����ÿ���, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_WIRELESS_CBRIDGE='��ī�� ��忡���� AP��忡���� ���� ���� ����� ����� �� �����ϴ�.\n��� ������ ���ؼ��� ������������ �Ǵ� AP�� ����۵˴ϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_RESTART_CONFIRM_WIRELESS_WWAN='���� WAN���� ����,FTTH,ADSL,VDSL,���̺��𵩵��� ��κ� ���ͳ� ��Ŀ����� ����� �� �����ϴ�.\n��� ������ ���ؼ��� ������������ �Ǵ� AP�� ����۵˴ϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_TWINIP_CONFIRM_WARNING='Twin IP ����/���� �ÿ���, �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';
var MSG_WAN_FOR_LAN_WARNING='WAN��Ʈ�� ����� �����ϱ� ���ؼ��� �����⸦ ����� �Ͽ����մϴ�.\n����Ͻðڽ��ϱ�?';

// common
var MODIFY_OP='����'
var MSG_INVALID_HWADDR="MAC �ּҰ� �߸��Ǿ����ϴ�." 
var MSG_DELETE_RULE_CONFIRM="��Ģ�� �����Ͻðڽ��ϱ�?" 
var MSG_SELECT_RULE_TO_DEL="������ ��Ģ�� �����ؾ� �մϴ�." 
var MSG_ALL_STOP_RULE="��� ������ ���߽ðڽ��ϱ�?"

var MSG_HWADDR_NO_INPUT="MAC �ּҸ� �Է��ϼž� �մϴ�."
var MSG_SELECT_MAC_REMOVED="������ MAC�ּҸ� ������ �ֽʽÿ�."

var MSG_OPENER_PAGE_MOVED="���� �������� �̵��Ǿ����ϴ�."
var MSG_INVALID_VALUE="�Է°��� �߸� �Ǿ����ϴ�."


// wireless_config_wizard
var MSG_INVALID_WEP_KEY_HEXVALUE2="���� �Է½ÿ��� 16�������� �Է��Ͽ��� �մϴ�."
var MSG_INVALID_WPAPSK_KEY_MISMATCH="�ΰ��� ��Ʈ��ũ ��ȣ�� ��ġ���� �ʽ��ϴ�.\n���� ��ȣ�� �ι� �Է��ؾ� �մϴ�."

// sysconf_configmgmt
var MSG_RESTOREFILE_BLANK="������ ���������� �����Ͻʽÿ�."

//natrouterconf
var MSG_RULE_NAME_IS_BLANK="��Ģ�̸��� �����ϴ�!"


// wirelessconf_wdssetup
var MSG_WDS_DEL_WARNING="WDS ������ �����Ͻðڽ��ϱ�?" 
var MSG_APADD_REQUEST_APPLY="'�߰�' ��ư�� Ŭ���ϸ�, WDS������ �Ϸ�˴ϴ�."   

// wirelessconf_basicsetup
var MSG_BLANK_SSID="��ũ��ũ�̸�(SSID)�� �Է��ؾ� �մϴ�."
var MSG_INVALID_WEP_KEY_LENGTH="��Ʈ��ũ ��ȣ�� ���̰� �߸��Ǿ����ϴ�."
var MSG_INVALID_WEP_KEY_HEXVALUE="��Ʈ��ũ ��ȣ ���� 16�������� �Է��Ͽ��� �մϴ�."
var MSG_INVALID_WPAPSK_KEY_LENGTH="��Ʈ��ũ ��ȣ�� 8�����̻� �Է��Ͻʽÿ�."
var MSG_INVALID_5_KEY_LENGTH="��Ȯ�� 5������ ��ȣ�� �Է��Ͻʽÿ�."
var MSG_INVALID_13_KEY_LENGTH="��Ȯ�� 13������ ��ȣ�� �Է��Ͻʽÿ�."
var SAVE_CONFIGURATION_STRING="������ �����Ͻðڽ��ϱ�?"

var MSG_BLANK_REQUEST_SSID="��ũ��ũ�̸�(SSID)�� �Է��� �� '����' ��ư�� Ŭ���մϴ�."
var MSG_INVALID_REQUEST_KEY="��Ʈ��ũ ��ȣ�� �Է��� �� '����' ��ư�� Ŭ���մϴ�."
var MSG_INVALID_REQUEST_APPLY="'����' ��ư�� Ŭ���ϸ�, ���õ� AP�� ���ӵ˴ϴ�."
var MSG_APPLY_REQUEST_KEY="'����' ��ư�� Ŭ���ϸ� ������ ä���� ����˴ϴ�."
var MSG_BEST_CHANNEL_PRE="�˻��� ������ ä���� " 
var MSG_BEST_CHANNEL_POST="�� �Դϴ�."
var MSG_KEY_LENGTH_DESC="��ȣ ���� = "

// config_wizard
var MSG_BLANK_ACCOUNT="����� ������ �Է��ؾ� �մϴ�."
var MSG_BLANK_PASSWORD="����� ��ȣ�� �Է��ؾ� �մϴ�."

var MSG_INVALID_IP="IP�ּҰ� �߸��Ǿ����ϴ�."
var MSG_INVALID_NETMASK="����� ����ũ�� �߸��Ǿ����ϴ�."
var MSG_INVALID_GATEWAY="�⺻ ����Ʈ���̰� �߸��Ǿ����ϴ�."
var MSG_INVALID_FDNS="�⺻ DNS�����ּҰ� �߸��Ǿ����ϴ�"
var MSG_INVALID_SDNS="���� DNS�����ּҰ� �߸��Ǿ����ϴ�"


//netconf_lansetup
var NETCONF_INTERNAL_INVALID_NETWORK="IP �ּҰ� �ܺ� ��Ʈ��ũ�� �����ϴ�."
var STATIC_LEASE_ALREADY_EXIST_IPADDRESS="�̹� ��ϵ� IP�ּ� �Դϴ�."
var STATIC_LEASE_ALREADY_EXIST_HWADDRESS="�̹� ��ϵ� MAC�ּ� �Դϴ�."

var NETCONF_INTERNAL_TOO_SMALL_LEASETIME="IP �뿩�ð��� 10���̻����� �����Ͻʽÿ�."
var NETCONF_INTERNAL_TOO_BIG_LEASETIME="IP �뿩�ð��� 2147483647�� ���Ϸ� �����Ͻʽÿ�." 
var NETCONF_INTERNAL_INVALID_LEASETIME="IP �뿩�ð��� ���ڷ� �Է��ؾ� �մϴ�."

//netconf_wansetup
var NETCONF_INTERNET_DHCP_MTU_INVALID="MTU ���� 1500�� �ʰ��Ҽ� �����ϴ�."
var NETCONF_INTERNET_PPP_MTU_INVALID="MTU ���� 1492�� �ʰ��Ҽ� �����ϴ�."
var NETCONF_INTERNET_KEEP_ALIVE_MSG="�ð��� �Է��Ͻʽÿ�"
var NETCONF_INTERNET_GW_INVALID_NETWORK="����Ʈ���̰� ���� ��Ʈ��ũ�� �����ϴ�!"
var NETCONF_WANSETUP_CONFIRM_WANINFO="���ͳ� ���� ������ Ȯ�� �Ͻðڽ��ϱ�?"


//netconf_lansetup
var NETCONF_INTERNAL_INVALID_DHCP_S_ADDR="���� IP �ּ� �Ҵ� ������ �߸��Ǿ����ϴ�!"
var NETCONF_INTERNAL_INVALID_DHCP_E_ADDR="���� IP �ּ� �Ҵ� ������ �߸��Ǿ����ϴ�!"
var NETCONF_INTERNAL_INVALID_DHCP_ADDR="���� IP �ּ� �Ҵ� ������ �߸��Ǿ����ϴ�!"
var NETCONF_INTERNAL_DELETE_IP="������ IP�ּҸ� �����Ͻðڽ��ϱ�?"

// wirelessconf_advanced
var DESC_INVALID_TX_POWER="�۽� �Ŀ��� ���� 1 ~ 100 ������ ���̾�� �մϴ�.";
var DESC_INVALID_RTS_THRESHOLD="RTS Threshold�� ����  1 ~ 2347 ������ ���̾�� �մϴ�.";
var DESC_INVALID_FRAG_THRESHOLD="Fragmentation Threshold�� ����  256 ~ 2346 ������ ���̾�� �մϴ�.";
var DESC_INVALID_BEACON_INTERVAL="Beacon �ֱ��� ����  50 ~ 1024 ������ ���̾�� �մϴ�.";
var DESC_INVALID_BEACON_INTERVAL="Beacon �ֱ��� ����  50 ~ 1024 ������ ���̾�� �մϴ�.";

// expertconf_kai
var KAID_MODE_CHANGE_WARNING="�ý����� ����۵˴ϴ�. ����Ͻðڽ��ϱ�?"
var KAID_MUST_SELECT_OBT_SERVER="ī�̼����� �����ؾ� �մϴ�."
var KAID_RESTART_KAI_UI="ī�� UI�� �ٽ� ���� �ؾ��մϴ�."

//natrouterconf_portforward
var MAX_PORT_FORWARD=60
var NATCONF_PORTFORWARD_NO_MORE_RULE="���̻� ��Ʈ ������ ������ �߰��� �� �����ϴ�!"
var NATCONF_PORTFORWARD_INVALID_INT_IP_ADDRESS="���� IP �ּҰ� �߸��Ǿ����ϴ�!"
var NATCONF_PORTFORWARD_EXT_PORT_IS_BLANK="�ܺ� ��� ��Ʈ�� �������� �ʾҽ��ϴ�!"
var NATCONF_PORTFORWARD_INVALID_EXT_PORT="�ܺ� ��� ��Ʈ�� �߸��Ǿ����ϴ�!"
var NATCONF_PORTFORWARD_INVALID_EXT_PORT_RANGE="�ܺ� ��� ��Ʈ ������ �߸��Ǿ����ϴ�!"
var NATCONF_PORTFORWARD_INVALID_INT_PORT="���� ��� ��Ʈ�� �߸��Ǿ����ϴ�!"
var NATCONF_PORTFORWARD_INVALID_INT_PORT_RANGE="���� ��� ��Ʈ ������ �߸��Ǿ����ϴ�!"
var NATCONF_PORTFORWARD_RUN_RULE="��Ģ�� �����Ͻðڽ��ϱ�?"


//natrouterconf_misc
var NATCONF_INTAPPS_NO_MORE_ADD_FTP_PORT="������ �� �ִ� ��Ʈ�� ������ �ʰ��߽��ϴ� !"
var NATCONF_INTAPPS_FTP_PORT_EMPTY="��Ʈ�� �������� �ʾҽ��ϴ�!"
var NATCONF_INTAPPS_FTP_PORT_INVALID= "��Ʈ�� �߸��Ǿ����ϴ�!"

//natrouterconf_router
var NETCONF_ROUTE_ENTRY_DELETE="���õ� ����� ���̺��� �����Ͻðڽ��ϱ�?"
var NETCONF_ROUTE_ENTRY_SELECT="������ ��������̺��� ������ �ֽʽÿ�!"

//natrouterconf_twinzipdmz
var NATCONF_TWINIPDMZ_UPDATE_TIME="IP ���� �ð��� 60�� �̻��̾�� �մϴ�."
var NATCONF_TWINIPDMZ_WARNING="���� ������ PC�� Twin IP�� ����ϰ� �ֽ��ϴ�. Twin IP�� ���� �Ͻø� �ش� PC�� IP �ּҸ� �缳�� �ؾ� ���������� ����� �� �ֽ��ϴ�.  (���� ���� �� �� ���ʹ� ipTIME �� ���� ������ ������ ������ ��� ����� �̷�� ���� �ʽ��ϴ�.)  ��� ���� �Ͻðڽ��ϱ� ?"


//firewallconf_firewall
var USER_FWSCHED_TYPE=1
var APP_FWSCHED_TYPE=2
var URL_FWSCHED_TYPE=4
var MAX_FWSCHED_COUNT=200 
var FIREWALLCONF_FIREWALL_INVALID_TIME_TO_BLOCK="������ �ð������� �߸� �Ǿ����ϴ�."
var FIREWALLCONF_FIREWALL_DATE_WARNING="������ ������ �����ϼž� �մϴ�"
var FIREWALLCONF_FIREWALL_INVALID_SOURCE_IP="������ IP �ּҰ� �߸��Ǿ����ϴ�!"
var FIREWALLCONF_FIREWALL_INVALID_SOURCE_HW="������ MAC �ּҰ� �߸��Ǿ����ϴ�!"
var FIREWALLCONF_FIREWALL_INVALID_DEST_IP="������ IP �ּҰ� �߸��Ǿ����ϴ�!"
var FIREWALLCONF_FIREWALL_INVALID_DEST_PORT="������ ��Ʈ�� �߸��Ǿ����ϴ�!"
var FIREWALLCONF_FIREWALL_RUN_RULE="��Ģ�� �����Ͻðڽ��ϱ�?"
var FIREWALLCONF_FIREWALL_NO_MORE_RULE="���̻� ������ �߰��� �� �����ϴ�!"
var FIREWALLCONF_FIREWALL_INVALID_PRIORITY="�켱���� ���� �߸� �Ǿ����ϴ�."

//firewallconf_netdetect
var NETCONF_NETDETECT_WARNING1="�ּ� ������� 10 �Դϴ�."
var NETCONF_NETDETECT_WARNING2="��ȿ �ð� ������ 0�� ~ 23�� �Դϴ�."


//firewallconf_internet
var FIREWALLCONF_INTERNET_RESTRICTIVE_WARNING="������ PC�� ������ �ּ� 1�� �̻��̰ų� �ִ� 253�� �����Դϴ�."
var FIREWALLCONF_INTERNET_RESTRICTIVE_CLEARANCE="��ϵ� ��� PC������ �ʱ�ȭ �Ͻðڽ��ϱ� ?"

//firewallconf_etc 
var DESC_INVALID_ARP_PERIOD="�ʴ� ARP������ 1 ~ 100 ������ ���� �����մϴ�."

//expertconf_ddns
var EXPERTCONF_DDNS_HOSTNAME_IS_BLANK = "ȣ��Ʈ �̸��� �����ϴ�."
var EXPERTCONF_DDNS_HOSTNAME_NOT_IPTIMEORG = "ȣ��Ʈ�̸���  iptime.org �� ������ �մϴ�."
var EXPERTCONF_IPTIMEDNS_NOMORE_WANRING1 ="�� �̻� ipTIME DDNS ȣ��Ʈ�� �߰��� �� �����ϴ�."
var EXPERTCONF_IPTIMEDDNS_INVALID_USERID= "��Ȯ�� E-mail �ּҸ� �Է��Ͻʽÿ�."
var EXPERTCONF_DYNDNS_NOMORE_WANRING1="�� �̻� dyndns.org�� DDNS ȣ��Ʈ�� �߰��� �� �����ϴ�."
var INVALID_EMAIL_ADDRESS_STR="E-mail �ּ������� �߸��Ǿ����ϴ�."
var EXPERTCONF_IPTIMEDDNS_INVALID_HOSTNAME = "ȣ��Ʈ �̸��� '_' �Ǵ� '.'�� ����� �� �����ϴ�."

//expertconf_remotepc
var EXPERTCONF_WOL_PC_NAME_IS_BLANK="PC ������ ����ֽ��ϴ�!"
var EXPERTCONF_WOL_DEL_PC="PC�� ���� �Ͻðڽ��ϱ� ?"
var EXPERTCONF_WOL_WANT_TO_WAKE_UP_PC ="PC �� �ѽðڽ��ϱ� ?"

//expertconf_hostscan
var ICMP_PING=0
var ARP_PING=1
var PING_SCAN=0
var TCP_PORT_SCAN=1
var SYSINFO_HOST_INVALID_TIMEOUT =   "�ð������� �Է��Ͻʽÿ�"
var SYSINFO_HOST_TIMERANGE   =       "�ð��� 1���̻� �Է��ؾ� �մϴ�."
var SYSINFO_HOST_INVALID_DATASIZE =  "ũ�⸦ �Է��Ͻʽÿ�"
var SYSINFO_HOST_DATARANGE    =      "0~65,500������ ������ �Է��մϴ�."
var SYSINFO_HOST_INVALID_START  =    "���� ��Ʈ�� �Է��Ͻʽÿ�"
var SYSINFO_HOST_PORTRANGE      =    "0~65,535������ ������ �Է��մϴ�."

//trafficconf_conninfo
var TRAFFICCONF_CONNINFO_DELETE_CONN="������ IP�ּ��� Ŀ�ؼ��� �����Ͻðڽ��ϱ�?"

//trafficconf_switch
var SELECT_VLAN_PORT_WARNING ="VLAN ��Ʈ�� �����Ͻʽÿ�"
var SELECT_VLAN_PORT_TRUNK_WARNING ="�����ҷ��� VLAN�� TRUNK(%s)�� ��� ��Ʈ�� ���ԵǾ�� �մϴ�."
var SELECT_TRUNK_PORT_WARNING ="TRUNK ��Ʈ�� �����Ͻʽÿ�"
var SELECT_TRUNK_PORT_VLAN_WARNING ="�����ҷ��� TRUNK�� ��� ��Ʈ���� \nVLAN(%s) �Ǵ� �ٸ� ���� VLAN�� ���ԵǾ�� �մϴ�."
var MAX_MEMBER_TRUNK_WARNING="TRUNK ���� ������ �ִ� ��Ʈ���� %d�� �Դϴ�."
var ALREADY_OTHER_GROUP_MEMBER="�ٸ� �׷쿡 �̹� ���ԵǾ� �ִ� ��Ʈ�� �ֽ��ϴ�."

//trafficconf_loadshare
var NATCONF_PORTFORWARD_NO_MORE_RULE="���̻� ��Ʈ ������ ������ �߰��� �� �����ϴ�"
var NATCONF_PORTFORWARD_RULE_NAME_IS_BLANK="��Ģ �̸��� �����ϴ�"
var NATCONF_INTSERVER_INVALID_EXT_PORT="��Ʈ�� �߸��Ǿ����ϴ�"
var NATCONF_LOADSHARE_KEEP_WRR="�ڵ� �л� ��� �����߿��� '�ڵ� ���ͳ� ���� ���' ����� ������ �� �����ϴ�." 
var NATCONF_LOADSHARE_ON_LINE_BACKUP="'�ڵ� ���ͳ� ���� ���' ��� ���� �ڵ����� �����˴ϴ�. ��� �Ͻðڽ��ϱ� ?"
var NATCONF_LOADSHARE_DELETE_RULE="��Ģ�� �����Ͻðڽ��ϱ�?"
var NATCONF_PORTFORWARD_SELECT_RULE_TO_DEL="������ ��Ģ�� �����ؾ� �մϴ�." 
//sysconf_syslog
var SYSCONF_SYSLOG_WANRING = "�ð� ������ �߸��Ǿ����ϴ�."
var SYSCONF_SYSLOG_EMAIL_CONFIRM= "E-mail ����Ʈ�� �����ðڽ��ϱ�?"
var SYSCONF_SYSLOG_CLEAR_CONFIRM= "��� �ý��� �αװ� �������ϴ�"

//sysconf_login
var SYSCONF_LOGIN_INVALID_NEW_PASS=     "�� ��ȣ�� ��ġ���� �ʽ��ϴ�!"
var SYSCONF_LOGIN_INVALID_NEW_ID  =     "�� ������ �����ڿ� ������ ���ո� ���� �մϴ�."
var SYSCONF_LOGIN_RELOGIN         =     "��ȣ�� �����ϸ�, �� ��ȣ�� �ٽ� �α����ϼž� �մϴ�!"

//expertconf_pptpvpn
var EXPERTCONF_PPTPVPN_VPN_ACCOUNT_IS_BLANK="VPN���� ������ �Է��ؾ� �մϴ�"
var EXPERTCONF_PPTPVPN_VPN_PASSWORD_IS_BLANK="VPN���� ��ȣ�� �Է��ؾ� �մϴ�"
var EXPERTCONF_PPTPVPN_IP_ADDRESS_IS_INVALID="IP �ּҸ� �Է��ؾ� �մϴ�"
var EXPERTCONF_PPTPVPN_DO_YOU_WANT_DELETE="������ �����ϰڽ��ϱ�?"

//accesslist

var ACCESSLIST_NOIPLISTMSG_1="������ IP�� �����ϴ�. ���� �����Ͻ� PC("
var ACCESSLIST_NOIPLISTMSG_2=")�� ���� ���ȿ� �߰��Ͻðڽ��ϱ�?"
var ACCESSLIST_WRONG_INPUT_IP="������ �ּҰ� �߸� �Է� �Ǿ����ϴ�."
var ACCESSLIST_WRITE_EXPLAIN="������ �Է��ϼž� �մϴ�."
var ACCESSLIST_DEL_WANT="�����Ͻðڽ��ϱ�?"

//reboot
var REBOOT_CHANGEIP_RETRY_LOGIN="���� IP�ּҰ� ����Ǿ� �ٽ� �α����ϼž� �մϴ�."
var REBOOT_CHANGEIP_RETRY_NOLOGIN_WINDOWS="����� IP�ּҷ� �ٽ� �����ϼž� �մϴ�."
var SYSCONF_RESTORE_RETRY_CONNET="���� ������ ���� IP �ּҷ� �ٽ� �����ϼž� �մϴ�."

//trafficconf_qos
var QOS_BASIC_WARNING="IP�ּ�/��Ʈ/���ø����̼Ǻ� �����̵Ǿ� �ִٸ� ��� ���� �˴ϴ�. ��� ���� �Ͻðڽ��ϱ� ?"
var QOS_COMMON_EXCCED_MAX_CLASS="Ŭ���� �ִ� ������ �ʰ��߽��ϴ�."
var QOS_COMMON_EXCCED_MAX_SPEED="�ִ� ���ͳ� �ӵ������� �ʰ��߽��ϴ�."
var QOS_COMMON_ISOLATED_EXCEED="'����' �Ӽ��� ���� Ŭ������ �뿪���� ���� �ִ� ���ͳ� �ӵ��� �ʰ��� �� �����ϴ�."
var QOS_COMMON_NO_CHANGE_DIRECTION="Ŭ������ ������ ������ �� �����ϴ�."
var QOS_COMMON_ONLY_DIGIT="������ �Է��� �� �ֽ��ϴ� !"
var QOS_COMMON_BASIC_SETUP_FIRST="Qos �⺻ ���� �Ǿ� ���� �ʽ��ϴ� !"
var QOS_PROTOCOL_SELECT="���������� �����ؾ� �մϴ�."
var QOS_PORT_PORTRANGE="1~65,535������ ������ �Է��ؾ� �մϴ�."
var QOS_PORT_INVALID_EXT_PORT_RANGE="�ܺ� ��� ��Ʈ ������ �߸��Ǿ����ϴ�!"
var QOS_BADNWIDTH_EMPTY="�ӵ������� �Է��ؾ� �մϴ�."
var QOS_RATE_RANGE="32 Kbps ~ 50 Mbps ������ �ؼ��ؾ� �մϴ�."
var QOS_BPI_RANGE="IP �ּҺ� �뿪�� �����Ҵ� ������ �߸��Ǿ����ϴ�. (��밹�� : 2 ~ 31)"

// wirelessconf_multibssid
var MSG_DEL_MBSSID_WARNING="���õ� ���� ��Ʈ��ũ�� ���� �˴ϴ�. ��� ���� �Ͻðڽ��ϱ�?"
var MSG_MBSSID_QOS_WARNING="�ּ� 100 Kbps �� �̻� �����ϼž� �մϴ�."

// wirelessconf_multibridge
var MSG_DEL_WWAN_WANRING="����WAN�� ����� ���, ���� WAN��Ʈ�� ����� �ߴܵǸ�,\n������ WAN��Ʈ(���ͳ���Ʈ)�� ����ϰ� �˴ϴ�\n����Ͻðڽ��ϱ�?"

//trafficconf_connctrl
var MSG_CONNECTION_MAX_WARNING="�ִ� ���ؼ� ���� �ʱⰪ ���� ũ�ų� ������ ���� ���,\n�Ϻ� ȯ�濡���� �ý����� �޸� �������� ���� ���۵��� ������ �� �� �ֽ��ϴ�.\n\n�׷��� ����Ͻðڽ��ϱ�?" 
var MSG_CONNECTION_MAX_TOO_SMALL="�ִ� ���ؼ� ���� �ʹ� �۽��ϴ�. 512 �̻����� �����Ͻʽÿ�."
var MSG_UDP_CONNECTION_MAX_TOO_BIG="�ִ� UDP ���ؼ� ���� 10���� �ִ� ���ؼ� �������� ������ �����Ǿ�� �մϴ�."
var MSG_ICMP_CONNECTION_MAX_TOO_BIG="�ִ� ICMP ���ؼ� ����  �ִ� ���ؼ� �� ���� �۰� �����Ǿ�� �մϴ�."
var MSG_INVALID_RATE_PER_MAX="�ùٸ� PC�� �ִ� ���ؼ� ������ ���� �Է��Ͻʽÿ�."
var MSG_INVALID_AUTH_FOR_BRIDGE="���� ��Ƽ�긮���� ���� ������ �� ���� AP�Դϴ�."


//sysconf_misc
var MSG_WBM_POPUP="���������� �� �ݰ� �α��� ȭ���� �������Ͽ��� ������ ����˴ϴ�."

// trafficconf_switch
var MSG_SAME_PORT_MIRROR="���� ��Ʈ�� �̷����� �� �� �����ϴ�."

var MSG_HUBMODE_WARNING="!!! ���ǻ��� !!!\n����� ��� �� ��� ���ͳ� �������� ����� �ߴܵǸ�,\n������ �������� ������ �� �����ϴ�.\n\n\
����带 �����ϱ� ���ؼ���\nCPU(PWR/RUN) LED�� �ֱ������� ����ɶ�����, Reset(�ʱ�ȭ)��ư�� �����ϴ�.\n\n\
����Ͻðڽ��ϱ�?"
var MSG_HUBMODE_CONFIRM="Ȯ�� ��ư�� ������ ������ �����Ǹ�,\n���̻� ������ �������� ���� �����ϴ�.\n\n����Ͻðڽ��ϱ�?"

// trafficconf_portqos
var MSG_PORTQOS_BOTH_ZERO=": 0 Mbps�� ������ �� �����ϴ�."
var MSG_PORTQOS_MAX_ERROR=": 100 Mbps �̻��� ������ ������ �� �����ϴ�."
var MSG_PORTQOS_INVALID_VALUE=": �ӵ� ���� ���� �߸��Ǿ����ϴ�. ("


// iframe_pppoe_sched
var MSG_INVALID_HOUR_VALUE="�ð� ������ 0 �� 23 ������ ���ڸ� �Է��մϴ�."
var MSG_INVALID_MIN_VALUE="�� ������ 0 �� 59 ������ ���ڸ� �Է��մϴ�."
var MSG_PPPOE_SCHEDULE_SAME_RULE="���� ������ ������ �����մϴ�."

// trafficconf_lspolicy
var MSG_BACKUP_METHOD_AT_LEAST_ONE="�ϳ� �̻��� ����� �����ϼž� �մϴ�."
var MSG_BACKUP_METHOD_DOMAIN="������ �̸��� �Է��ϼž� �մϴ�."

var MSG_INVALID_PROTONUM="�߸��� �������� ��ȣ�Դϴ�."


var MSG_MBRIDGE_AUTO_CHANNEL_STRING ='[�ڵ� ä�� �˻�] ����� �긮���� ���� �����Ϸ��� AP�� ä���� ����Ǿ��� ���,\n\
�ڵ����� ä���� �˻��Ͽ� �ٽ� ������ ���ִ� ����Դϴ�.\n\
����,  [�ڵ� ä�� �˻�] ���� �� �긮���� ������ ������ ���,\n\
�� ��ġ�� AP����� ���������� �������� ���� �� �ֽ��ϴ�.\n\
��� �Ͻðڽ��ϱ�?';

var TRAFFICCONF_ALL_OPTIONS_CLEAR =  "��� �ɼǼ����� �����˴ϴ�.\n����Ͻðڽ��ϱ�?"
var MSG_SELECT_DEL_MBSS = "������ ���� ��Ʈ��ũ�� �����Ͻʽÿ�."

var AUTO_STRING = "�ڵ�"
var MBRIDGE_AUTO_CHANNEL_SEARCH = "�ڵ� ä�� �˻�"


var UPPER_CHANNEL_TXT =  "����"
var LOWER_CHANNEL_TXT = "����"

var LAN_GATEWAY_WARNING_MSG = "�����⸦ AP �Ǵ� ��� �������� ��� ��, ������ ��ü�� ���ͳ� ������ ���� �����Դϴ�.\n����Ͻðڽ��ϱ�? ";
var MSG_IPPOOL_MAX_WARNING = "IP�ּҹ��������� �ִ� ������ �ʰ��߽��ϴ�." 


var NASCONF_SAMBANAME_BLANK= "�����̸��� �Է��ؾ� �մϴ�."
var NASCONF_SAMBAGROUP_BLANK= "�۾��׷��� �Է��ؾ� �մϴ�."


var MSG_DFS_WARNING="This channel is DFS channel.\nAP may be activated only unless radar signal is found during 1 ~ 10 minutes."


var SYSCONF_LOGIN_BLANK_ID    = "������ ������ �Է��ؾ� �մϴ�."
var SYSCONF_LOGIN_BLANK_PASS  = "�� ��ȣ�� �Է��ؾ��մϴ�."
var SYSCONF_LOGIN_REMOVE_WARNING  = "������ ����/��ȣ�� �����մϴ�. ����Ͻðڽ��ϱ�?"
var SYSCONF_LOGIN_INVALID_SESSION_TIMEOUT  = "�ڵ� �α� �ƿ� �ð��� 1 ~ 60 �л����� ���� �Է��Ͽ��� �մϴ�."


var SYSCONF_LOGIN_CANT_REMOVE_ID  = "���ǹ�Ŀ����� ���� �� ��ȣ�� ������ �� �����ϴ�."
var SYSCONF_LOGIN_SHOULD_HAVE_IDPASS  = "���ǹ�� ��� �� ���� �� ��ȣ�� ���� �����ؾ� �մϴ�."
var SYSCONF_LOGIN_RELOGIN_SESSION  = "���� �� �α��� �������� �̵��մϴ�. ����Ͻðڽ��ϱ�?"

var MSG_PPTPVPN_REBOOT = "VPN ������ �����ϱ����� �ý����� ������մϴ�. ����Ͻðڽ��ϱ�?"
var MSG_IGMP_REBOOT = "IPTV ������ �����ϱ����� �ý����� ������մϴ�. ����Ͻðڽ��ϱ�?"

var MSG_NO_DEL_WDS="������ WDS�� �����ϼ���."
var MSG_QOS_REBOOT="QOS ������ �����ϱ����ؼ��� �ý����� ������ؾ��մϴ�. ����Ͻðڽ��ϱ�?"


var UNALLOWED_ID_MSG  = "������ ���� ����� ID�Դϴ�."


var DESC_INVALID_DCS_PERIOD="ä�� �˻� �ֱ�� 1 ~ 100 �ð� ���̷� �Է��ؾ� �մϴ�."

var INVALID_HOUR_TEXT="[�ð�] �Է¶��� 0 ~ 23 ������ ���ڷ� �Է°����մϴ�."
var INVALID_MIN_TEXT="[��] �Է¶��� �� 0 ~ 59 ������ ���ڷ� �Է°����մϴ�."
var SELECT_DAY_DESC="[����] �Ǵ� [����� ����] �� �����ϼ���."

var SNMP_INVALID_PORT= "��Ʈ��ȣ�� 1 - 65535 ������ ���� �Է��ؾ��մϴ�."
var SNMP_COMMUNITY_ALERT= "Community�� �Է��Ͻʽÿ�."

var MSG_INVALID_RADIUS_SERVER="RADIUS ���� �ּҰ� �߸��Ǿ����ϴ�."
var MSG_INVALID_RADIUS_SECRET="RADIUS ���� ��ȣ�� �߸��Ǿ����ϴ�."
var MSG_INVALID_RADIUS_PORT="RADIUS ���� ��Ʈ���� �߸��Ǿ����ϴ�."
var MSG_WEP_WARNING="WEP �Ǵ� TKIP ��ȣȭ ���� �ÿ��� �ִ� �ӵ� 54Mbps�� 11g���θ� �����մϴ�.\n����Ͻðڽ��ϱ�?"
var MSG_WEP_SEC_WARNING="WEP ��ȣȭ ������ �ſ� ����� ���ȼ�������, ����ϴ� ���� �������� �ʽ��ϴ�.\n�׷��� ����Ͻðڽ��ϱ�?"
var MSG_WIRELESS_WAN_WARNING="�̹� �ٸ� ���� ��Ʈ��ũ���� ����WAN����� ����ϰ� �ս��ϴ�.\n�ٸ� ���� ��Ʈ��ũ�� ����WAN����� ���� �����Ͻʽÿ�."

var MSG_WDS_CHANNEL_WARNING="�����Ϸ��� AP�� ä�ΰ� ���� ������ ä���� �ٸ��ϴ�. \nWDS���� ��, [���� ����/����] �޴����� ä���� �����ϰ� �����Ͽ��� �մϴ�.\n����Ͻðڽ��ϱ�?"

var MSG_NEW_BSS="�� ���� ��Ʈ��ũ �߰�" 

var MSG_ADD_MAC_WARNING="�߰��� MAC�ּҸ� üũ�Ͽ� �ֽʽÿ�."
var MSG_REMOVE_MAC_WARNING="������ MAC�ּҸ� üũ�Ͽ� �ֽʽÿ�."

var MSG_NEW_FOLDER_ERR="������ �������� �Է��Ͽ� �ֽʽÿ�."
var MSG_SELECT_FOLDER_ERR="��������� �����Ͽ� �ֽʽÿ�."

var MSG_REMOVE_IPDISK_DDNS="ipDISK���񽺸� �ߴ��� ���,������ ipDISK�ּ� ����� ��ҵ˴ϴ�..\n����, �����Ǿ��� ipDISK �ּҸ� �ٸ� ����ڰ� ����� ���� �ֽ��ϴ�.\n����Ͻðڽ��ϱ�?"

var MSG_NEED_REBOOT_FOR_WWAN="���� �������� ����WAN�� �����Ϸ��� �ý����� ������ؾ��մϴ�.\n����Ͻðڽ��ϱ�?"

var MSG_ENABLE_ONE_SERVICE_ID="�ּ� �Ѹ��̻��� ����ڸ� �����ؾ� �մϴ�."
var MSG_DUPLICATE_SERVICE_ID="������ �����ID�� ������ �� �����ϴ�."

var PASSWORD_NEEDED_TO_SET_THIS="�ش� ����� ������ ���� �� ��ȣ�� ���� �� ��밡�� �մϴ�.\n������ ���� �� ��ȣ�� �����ϰڽ��ϱ�?"

var CANT_SET_DEFAULT_ID_PASS="�ʱ�ȭ�� �����Ǵ� ���� �� ��ȣ�� ����Ͽ����ϴ�.\n���� �� ��ȣ�� �����Ͽ� �����Ͻʽÿ�."
var SYSCONF_LOGIN_NEED_CAPTCHA_CODE="�����ڵ带 �Է��ؾ��մϴ�."


var MSG_SELECT_TORRENT_FOLDER_ERR="�ٿ�ε� ������ �����Ͽ� �ֽʽÿ�."
var MSG_SELECT_MEDIA_FOLDER_ERR="�̵�� ������ �����Ͽ� �ֽʽÿ�."
var MSG_MEDIA_NAME_ERR="�����̸��� �Է��Ͽ� �ֽʽÿ�."

var MSG_SELECT_ITUNES_FOLDER_ERR="iTunes ������ �����Ͽ� �ֽʽÿ�."
var MSG_USB_MODE_WARNING="USB��带 �����ϱ� ���ؼ��� �ý����� ������Ͽ��� �մϴ�.\n����Ͻðڽ��ϱ�?"

var MSG_SELECT_APACHE_DOC_FOLDER_ERR="DocumentRoot�� �����Ͽ� �ֽʽÿ�."
var MSG_SELECT_APACHE_SERVER_FOLDER_ERR="ServerRoot�� �����Ͽ� �ֽʽÿ�."

var MSG_SELECT_MYSQL_FOLDER_ERR="DB������ �����Ͽ� �ֽʽÿ�."

var MSG_REMOVE_PLUGIN_APP="������ App�� �����Ͻðڽ��ϱ�?"
var MSG_INSTALL_FINISH_MOVE_PAGE="App�� ��ġ�� �Ϸ�Ǿ����ϴ�.\n[Plug-in APP����] ���������� ��ġ�� App�� ������ �� �ֽ��ϴ�.\n[Plug-in APP���� ȭ������ �̵��Ͻðڽ��ϱ�?"

var MSG_APACHE_RUN_WARNING="Apache�������� �ߴܵ� ���¿��� ������ �� �����ϴ�.\n[�⺻ ���� App����]->[���񽺼���]���� Apache������ �����Ͻʽÿ�."

var MSG_PLUGIN_NO_USB_HDD="USB�� ������ġ�� �����ؾ� Plug-in APP�� ��ġ�� �����մϴ�."

var MSG_APACHE_INVALID_FS="������ DocumentRoot�� ���Ͻý����� FAT32�Ǵ� ExFAT�Դϴ�.\n�� ��� [Plug-in App���]�� ����� �� �����ϴ�.\nNTFS�Ǵ� Ext2/3/4(������)���� �ý����� ����� ���� �����մϴ�.\n�׷��� ����Ͻðڽ��ϱ�?"

var SYSCONF_ONLINE_UPGRADE_CONFIRM="���׷��̵� ���� �߿��� �������� ��� ����� ����� �� �����ϴ�.\n����Ͻðڽ��ϱ�?"

var FIRMUP_DONE_TXT="�߿��� ���׷��̵尡 �Ϸ�Ǿ����ϴ�.\nȮ�� ��ư�� ������ �α��� �������� �������մϴ�."

var DDNS_HOSTNAME_RULE_TXT="ȣ��Ʈ �̸��� ���� �� ���ڸ� �����մϴ�."

var SYSCONF_LOGIN_CANT_REMOVE_WARNING="���ο� ������ ���� �� ��ȣ�� �Է��Ͻʽÿ�."

// USE_SYSCONF_MISC2
var SYSCONF_HOSTNAME_WARNING="������ �̸��� 1���� �̻��̾�� �մϴ�."
var SYSCONF_HOSTNAME_SPECIAL_WARNING="������ �̸��� Ư������ �� ������ �� �� �����ϴ�."
var SYSCONF_LED_START_TIME_ALERT="���۽ð��� ������ �ð����� Ŭ �� �����ϴ�."
var SYSCONF_APPLY_BUTTON_NAME="�ٽ� ����"
var SYSCONF_APPLY_ORIGINAL_VALUE="����"
var SYSCONF_FAN_ALERT="�µ����� ������ �߸��Ǿ����ϴ�."


// NASCONF
var MSG_NASCONF_SAME_AS_MGMT_PORT="������ ������Ʈ�� ������ ��Ʈ�� �����Ͽ����ϴ�.\n������ ������Ʈ ���� ��, �ش� ��Ʈ�� ����� �� �ֽ��ϴ�.\n[�ý���]->[��Ÿ����]���� ������ ������Ʈ�� �����ϰڽ��ϱ�?"

// WIRELESSCONF
var MSG_5G_LOW_CHANNEL_WARNING="[ä��36-ä��48]�� ���Ĺ��� ����� ä�η� �����Ǿ� �ֽ��ϴ�.\n���Ÿ� ���� �ÿ���  [ä��149-ä��161] ����� ��õ�մϴ�.\n����Ͻðڽ��ϱ�?"


var MSG_INVALID_SSID_STRING="�� ��Ʈ��ũ�̸�(SSID)�� ����� �� �����ϴ�."


var MSG_INVALID_FOLDER_STR="�߸��� ���� �̸��� �Է��Ͽ����ϴ�."
var MSG_INVALID_FOLDER_NON_ASCII_STR="�ѱ� �������� �Է��� �� �����ϴ�."
var MSG_INVALID_FOLDER_2DOTS_STR=".. �� ���������� ����� �� �����ϴ�."
var MSG_INVALID_FOLDER_DOT_STR=". ���� ���۵� �������� ����� �� �����ϴ�."
var MSG_CANT_BE_USED="�� ����� �� �����ϴ�."
var MSG_INVALID_PASSWORD_STR="�߸��� ��ȣ�� �Է��Ͽ����ϴ�."

var MSG_DYNAMIC_CHANNEL_WARNING="�ڵ�ä�� ������ [����ä�κ���] ��ɵ� ���ÿ� ���� �˴ϴ�.\n����Ͻðڽ��ϱ�?" 

var MSG_RESTART_PORT_ROLE="���� ��Ʈ ��� ���� �� �ý����� ����۵˴ϴ�.\n�ý����� ����� �� ����, �� ������ ���� ������������ �ڵ� �������� ������ �� �ֽ��ϴ�.\n����Ͻðڽ��ϱ�?"

var SYSCONF_INVALID_HOSTNAME="�߸��� ȣ��Ʈ�̸��Դϴ�."
var UNPERMITTED_STR_PREFIX="����Ҽ� ���� ���� :"
var SYSCONF_INVALID_TEMPERATURE="�߸��� �µ��� �Է��Ͽ����ϴ�.(�µ� <= 100)"

var SYSCONF_SET_URL_TAG="URL TAG���� �Է��Ͻʽÿ�."
</script>
