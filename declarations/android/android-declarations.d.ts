/// <reference path="./android-platform-27.d.ts" />

import globalAndroid = android;

declare namespace Android {
    namespace Manifest {
        type Permission = 'android.permission.ACCESS_CHECKIN_PROPERTIES' | 'android.permission.ACCESS_COARSE_LOCATION' | 'android.permission.ACCESS_FINE_LOCATION' | 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS' | 'android.permission.ACCESS_NETWORK_STATE' | 'android.permission.ACCESS_NOTIFICATION_POLICY' | 'android.permission.ACCESS_WIFI_STATE' | 'android.permission.ACCOUNT_MANAGER' | 'android.permission.ADD_VOICEMAIL' | 'android.permission.ANSWER_PHONE_CALLS' | 'android.permission.BATTERY_STATS' | 'android.permission.BIND_ACCESSIBILITY_SERVICE' | 'android.permission.BIND_APPWIDGET' | 'android.permission.BIND_AUTOFILL_SERVICE' | 'android.permission.BIND_CARRIER_MESSAGING_SERVICE' | 'android.permission.BIND_CARRIER_SERVICES' | 'android.permission.BIND_CHOOSER_TARGET_SERVICE' | 'android.permission.BIND_CONDITION_PROVIDER_SERVICE' | 'android.permission.BIND_DEVICE_ADMIN' | 'android.permission.BIND_DREAM_SERVICE' | 'android.permission.BIND_INCALL_SERVICE' | 'android.permission.BIND_INPUT_METHOD' | 'android.permission.BIND_MIDI_DEVICE_SERVICE' | 'android.permission.BIND_NFC_SERVICE' | 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE' | 'android.permission.BIND_PRINT_SERVICE' | 'android.permission.BIND_QUICK_SETTINGS_TILE' | 'android.permission.BIND_REMOTEVIEWS' | 'android.permission.BIND_SCREENING_SERVICE' | 'android.permission.BIND_TELECOM_CONNECTION_SERVICE' | 'android.permission.BIND_TEXT_SERVICE' | 'android.permission.BIND_TV_INPUT' | 'android.permission.BIND_VISUAL_VOICEMAIL_SERVICE' | 'android.permission.BIND_VOICE_INTERACTION' | 'android.permission.BIND_VPN_SERVICE' | 'android.permission.BIND_VR_LISTENER_SERVICE' | 'android.permission.BIND_WALLPAPER' | 'android.permission.BLUETOOTH' | 'android.permission.BLUETOOTH_ADMIN' | 'android.permission.BLUETOOTH_PRIVILEGED' | 'android.permission.BODY_SENSORS' | 'android.permission.BROADCAST_PACKAGE_REMOVED' | 'android.permission.BROADCAST_SMS' | 'android.permission.BROADCAST_STICKY' | 'android.permission.BROADCAST_WAP_PUSH' | 'android.permission.CALL_PHONE' | 'android.permission.CALL_PRIVILEGED' | 'android.permission.CAMERA' | 'android.permission.CAPTURE_AUDIO_OUTPUT' | 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT' | 'android.permission.CAPTURE_VIDEO_OUTPUT' | 'android.permission.CHANGE_COMPONENT_ENABLED_STATE' | 'android.permission.CHANGE_CONFIGURATION' | 'android.permission.CHANGE_NETWORK_STATE' | 'android.permission.CHANGE_WIFI_MULTICAST_STATE' | 'android.permission.CHANGE_WIFI_STATE' | 'android.permission.CLEAR_APP_CACHE' | 'android.permission.CONTROL_LOCATION_UPDATES' | 'android.permission.DELETE_CACHE_FILES' | 'android.permission.DELETE_PACKAGES' | 'android.permission.DIAGNOSTIC' | 'android.permission.DISABLE_KEYGUARD' | 'android.permission.DUMP' | 'android.permission.EXPAND_STATUS_BAR' | 'android.permission.FACTORY_TEST' | 'android.permission.GET_ACCOUNTS' | 'android.permission.GET_ACCOUNTS_PRIVILEGED' | 'android.permission.GET_PACKAGE_SIZE' | 'android.permission.GET_TASKS' | 'android.permission.GLOBAL_SEARCH' | 'android.permission.INSTALL_LOCATION_PROVIDER' | 'android.permission.INSTALL_PACKAGES' | 'android.permission.INSTALL_SHORTCUT' | 'android.permission.INSTANT_APP_FOREGROUND_SERVICE' | 'android.permission.INTERNET' | 'android.permission.KILL_BACKGROUND_PROCESSES' | 'android.permission.LOCATION_HARDWARE' | 'android.permission.MANAGE_DOCUMENTS' | 'android.permission.MANAGE_OWN_CALLS' | 'android.permission.MASTER_CLEAR' | 'android.permission.MEDIA_CONTENT_CONTROL' | 'android.permission.MODIFY_AUDIO_SETTINGS' | 'android.permission.MODIFY_PHONE_STATE' | 'android.permission.MOUNT_FORMAT_FILESYSTEMS' | 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS' | 'android.permission.NFC' | 'android.permission.PACKAGE_USAGE_STATS' | 'android.permission.PERSISTENT_ACTIVITY' | 'android.permission.PROCESS_OUTGOING_CALLS' | 'android.permission.READ_CALENDAR' | 'android.permission.READ_CALL_LOG' | 'android.permission.READ_CONTACTS' | 'android.permission.READ_EXTERNAL_STORAGE' | 'android.permission.READ_FRAME_BUFFER' | 'android.permission.READ_INPUT_STATE' | 'android.permission.READ_LOGS' | 'android.permission.READ_PHONE_NUMBERS' | 'android.permission.READ_PHONE_STATE' | 'android.permission.READ_SMS' | 'android.permission.READ_SYNC_SETTINGS' | 'android.permission.READ_SYNC_STATS' | 'android.permission.READ_VOICEMAIL' | 'android.permission.REBOOT' | 'android.permission.RECEIVE_BOOT_COMPLETED' | 'android.permission.RECEIVE_MMS' | 'android.permission.RECEIVE_SMS' | 'android.permission.RECEIVE_WAP_PUSH' | 'android.permission.RECORD_AUDIO' | 'android.permission.REORDER_TASKS' | 'android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND' | 'android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND' | 'android.permission.REQUEST_DELETE_PACKAGES' | 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS' | 'android.permission.REQUEST_INSTALL_PACKAGES' | 'android.permission.RESTART_PACKAGES' | 'android.permission.SEND_RESPOND_VIA_MESSAGE' | 'android.permission.SEND_SMS' | 'android.permission.SET_ALARM' | 'android.permission.SET_ALWAYS_FINISH' | 'android.permission.SET_ANIMATION_SCALE' | 'android.permission.SET_DEBUG_APP' | 'android.permission.SET_PREFERRED_APPLICATIONS' | 'android.permission.SET_PROCESS_LIMIT' | 'android.permission.SET_TIME' | 'android.permission.SET_TIME_ZONE' | 'android.permission.SET_WALLPAPER' | 'android.permission.SET_WALLPAPER_HINTS' | 'android.permission.SIGNAL_PERSISTENT_PROCESSES' | 'android.permission.STATUS_BAR' | 'android.permission.SYSTEM_ALERT_WINDOW' | 'android.permission.TRANSMIT_IR' | 'android.permission.UNINSTALL_SHORTCUT' | 'android.permission.UPDATE_DEVICE_STATS' | 'android.permission.USE_FINGERPRINT' | 'android.permission.USE_SIP' | 'android.permission.VIBRATE' | 'android.permission.WAKE_LOCK' | 'android.permission.WRITE_APN_SETTINGS' | 'android.permission.WRITE_CALENDAR' | 'android.permission.WRITE_CALL_LOG' | 'android.permission.WRITE_CONTACTS' | 'android.permission.WRITE_EXTERNAL_STORAGE' | 'android.permission.WRITE_GSERVICES' | 'android.permission.WRITE_SECURE_SETTINGS' | 'android.permission.WRITE_SETTINGS' | 'android.permission.WRITE_SYNC_SETTINGS' | 'android.permission.WRITE_VOICEMAIL' | string;
        type PermissionAbbr = 'ACCESS_CHECKIN_PROPERTIES' | 'ACCESS_COARSE_LOCATION' | 'ACCESS_FINE_LOCATION' | 'ACCESS_LOCATION_EXTRA_COMMANDS' | 'ACCESS_NETWORK_STATE' | 'ACCESS_NOTIFICATION_POLICY' | 'ACCESS_WIFI_STATE' | 'ACCOUNT_MANAGER' | 'ADD_VOICEMAIL' | 'ANSWER_PHONE_CALLS' | 'BATTERY_STATS' | 'BIND_ACCESSIBILITY_SERVICE' | 'BIND_APPWIDGET' | 'BIND_AUTOFILL_SERVICE' | 'BIND_CARRIER_MESSAGING_SERVICE' | 'BIND_CARRIER_SERVICES' | 'BIND_CHOOSER_TARGET_SERVICE' | 'BIND_CONDITION_PROVIDER_SERVICE' | 'BIND_DEVICE_ADMIN' | 'BIND_DREAM_SERVICE' | 'BIND_INCALL_SERVICE' | 'BIND_INPUT_METHOD' | 'BIND_MIDI_DEVICE_SERVICE' | 'BIND_NFC_SERVICE' | 'BIND_NOTIFICATION_LISTENER_SERVICE' | 'BIND_PRINT_SERVICE' | 'BIND_QUICK_SETTINGS_TILE' | 'BIND_REMOTEVIEWS' | 'BIND_SCREENING_SERVICE' | 'BIND_TELECOM_CONNECTION_SERVICE' | 'BIND_TEXT_SERVICE' | 'BIND_TV_INPUT' | 'BIND_VISUAL_VOICEMAIL_SERVICE' | 'BIND_VOICE_INTERACTION' | 'BIND_VPN_SERVICE' | 'BIND_VR_LISTENER_SERVICE' | 'BIND_WALLPAPER' | 'BLUETOOTH' | 'BLUETOOTH_ADMIN' | 'BLUETOOTH_PRIVILEGED' | 'BODY_SENSORS' | 'BROADCAST_PACKAGE_REMOVED' | 'BROADCAST_SMS' | 'BROADCAST_STICKY' | 'BROADCAST_WAP_PUSH' | 'CALL_PHONE' | 'CALL_PRIVILEGED' | 'CAMERA' | 'CAPTURE_AUDIO_OUTPUT' | 'CAPTURE_SECURE_VIDEO_OUTPUT' | 'CAPTURE_VIDEO_OUTPUT' | 'CHANGE_COMPONENT_ENABLED_STATE' | 'CHANGE_CONFIGURATION' | 'CHANGE_NETWORK_STATE' | 'CHANGE_WIFI_MULTICAST_STATE' | 'CHANGE_WIFI_STATE' | 'CLEAR_APP_CACHE' | 'CONTROL_LOCATION_UPDATES' | 'DELETE_CACHE_FILES' | 'DELETE_PACKAGES' | 'DIAGNOSTIC' | 'DISABLE_KEYGUARD' | 'DUMP' | 'EXPAND_STATUS_BAR' | 'FACTORY_TEST' | 'GET_ACCOUNTS' | 'GET_ACCOUNTS_PRIVILEGED' | 'GET_PACKAGE_SIZE' | 'GET_TASKS' | 'GLOBAL_SEARCH' | 'INSTALL_LOCATION_PROVIDER' | 'INSTALL_PACKAGES' | 'INSTALL_SHORTCUT' | 'INSTANT_APP_FOREGROUND_SERVICE' | 'INTERNET' | 'KILL_BACKGROUND_PROCESSES' | 'LOCATION_HARDWARE' | 'MANAGE_DOCUMENTS' | 'MANAGE_OWN_CALLS' | 'MASTER_CLEAR' | 'MEDIA_CONTENT_CONTROL' | 'MODIFY_AUDIO_SETTINGS' | 'MODIFY_PHONE_STATE' | 'MOUNT_FORMAT_FILESYSTEMS' | 'MOUNT_UNMOUNT_FILESYSTEMS' | 'NFC' | 'PACKAGE_USAGE_STATS' | 'PERSISTENT_ACTIVITY' | 'PROCESS_OUTGOING_CALLS' | 'READ_CALENDAR' | 'READ_CALL_LOG' | 'READ_CONTACTS' | 'READ_EXTERNAL_STORAGE' | 'READ_FRAME_BUFFER' | 'READ_INPUT_STATE' | 'READ_LOGS' | 'READ_PHONE_NUMBERS' | 'READ_PHONE_STATE' | 'READ_SMS' | 'READ_SYNC_SETTINGS' | 'READ_SYNC_STATS' | 'READ_VOICEMAIL' | 'REBOOT' | 'RECEIVE_BOOT_COMPLETED' | 'RECEIVE_MMS' | 'RECEIVE_SMS' | 'RECEIVE_WAP_PUSH' | 'RECORD_AUDIO' | 'REORDER_TASKS' | 'REQUEST_COMPANION_RUN_IN_BACKGROUND' | 'REQUEST_COMPANION_USE_DATA_IN_BACKGROUND' | 'REQUEST_DELETE_PACKAGES' | 'REQUEST_IGNORE_BATTERY_OPTIMIZATIONS' | 'REQUEST_INSTALL_PACKAGES' | 'RESTART_PACKAGES' | 'SEND_RESPOND_VIA_MESSAGE' | 'SEND_SMS' | 'SET_ALARM' | 'SET_ALWAYS_FINISH' | 'SET_ANIMATION_SCALE' | 'SET_DEBUG_APP' | 'SET_PREFERRED_APPLICATIONS' | 'SET_PROCESS_LIMIT' | 'SET_TIME' | 'SET_TIME_ZONE' | 'SET_WALLPAPER' | 'SET_WALLPAPER_HINTS' | 'SIGNAL_PERSISTENT_PROCESSES' | 'STATUS_BAR' | 'SYSTEM_ALERT_WINDOW' | 'TRANSMIT_IR' | 'UNINSTALL_SHORTCUT' | 'UPDATE_DEVICE_STATS' | 'USE_FINGERPRINT' | 'USE_SIP' | 'VIBRATE' | 'WAKE_LOCK' | 'WRITE_APN_SETTINGS' | 'WRITE_CALENDAR' | 'WRITE_CALL_LOG' | 'WRITE_CONTACTS' | 'WRITE_EXTERNAL_STORAGE' | 'WRITE_GSERVICES' | 'WRITE_SECURE_SETTINGS' | 'WRITE_SETTINGS' | 'WRITE_SYNC_SETTINGS' | 'WRITE_VOICEMAIL' | string;
    }

    namespace Widget {
        type View = android.widget.AbsListView | android.widget.AbsoluteLayout | android.widget.AbsSeekBar | android.widget.AbsSpinner | android.widget.ActionMenuView | android.widget.Adapter | android.widget.AdapterView<any> | android.widget.AdapterViewAnimator | android.widget.AdapterViewFlipper | android.widget.Advanceable | android.widget.AlphabetIndexer | android.widget.AnalogClock | android.widget.ArrayAdapter<any> | android.widget.AutoCompleteTextView | android.widget.BaseAdapter | android.widget.BaseExpandableListAdapter | android.widget.Button | android.widget.CalendarView | android.widget.Checkable | android.widget.CheckBox | android.widget.CheckedTextView | android.widget.Chronometer | android.widget.CompoundButton | android.widget.CursorAdapter | android.widget.CursorTreeAdapter | android.widget.DatePicker | android.widget.DialerFilter | android.widget.DigitalClock | android.widget.EdgeEffect | android.widget.EditText | android.widget.ExpandableListAdapter | android.widget.ExpandableListView | android.widget.Filter | android.widget.Filterable | android.widget.FilterQueryProvider | android.widget.FrameLayout | android.widget.Gallery | android.widget.GridLayout | android.widget.GridView | android.widget.HeaderViewListAdapter | android.widget.HeterogeneousExpandableList | android.widget.HorizontalScrollView | android.widget.ImageButton | android.widget.ImageSwitcher | android.widget.ImageView | android.widget.LinearLayout | android.widget.ListAdapter | android.widget.ListPopupWindow | android.widget.ListView | android.widget.MediaController | android.widget.MultiAutoCompleteTextView | android.widget.NumberPicker | android.widget.OverScroller | android.widget.PopupMenu | android.widget.PopupWindow | android.widget.ProgressBar | android.widget.QuickContactBadge | android.widget.RadioButton | android.widget.RadioGroup | android.widget.RatingBar | android.widget.RelativeLayout | android.widget.RemoteViews | android.widget.RemoteViewsService | android.widget.ResourceCursorAdapter | android.widget.ResourceCursorTreeAdapter | android.widget.Scroller | android.widget.ScrollView | android.widget.SearchView | android.widget.SectionIndexer | android.widget.SeekBar | android.widget.ShareActionProvider | android.widget.SimpleAdapter | android.widget.SimpleCursorAdapter | android.widget.SimpleCursorTreeAdapter | android.widget.SimpleExpandableListAdapter | android.widget.SlidingDrawer | android.widget.Space | android.widget.Spinner | android.widget.SpinnerAdapter | android.widget.StackView | android.widget.Switch | android.widget.TabHost | android.widget.TableLayout | android.widget.TableRow | android.widget.TabWidget | android.widget.TextClock | android.widget.TextSwitcher | android.widget.TextView | android.widget.ThemedSpinnerAdapter | android.widget.TimePicker | android.widget.Toast | android.widget.ToggleButton | android.widget.Toolbar | android.widget.TwoLineListItem | android.widget.VideoView | android.widget.ViewAnimator | android.widget.ViewFlipper | android.widget.ViewSwitcher | android.widget.WrapperListAdapter | android.widget.ZoomButton | android.widget.ZoomButtonsController | android.widget.ZoomControls;
        type String = 'android.widget.AbsListView' | 'android.widget.AbsoluteLayout' | 'android.widget.AbsSeekBar' | 'android.widget.AbsSpinner' | 'android.widget.ActionMenuView' | 'android.widget.Adapter' | 'android.widget.AdapterView' | 'android.widget.AdapterViewAnimator' | 'android.widget.AdapterViewFlipper' | 'android.widget.Advanceable' | 'android.widget.AlphabetIndexer' | 'android.widget.AnalogClock' | 'android.widget.ArrayAdapter' | 'android.widget.AutoCompleteTextView' | 'android.widget.BaseAdapter' | 'android.widget.BaseExpandableListAdapter' | 'android.widget.Button' | 'android.widget.CalendarView' | 'android.widget.Checkable' | 'android.widget.CheckBox' | 'android.widget.CheckedTextView' | 'android.widget.Chronometer' | 'android.widget.CompoundButton' | 'android.widget.CursorAdapter' | 'android.widget.CursorTreeAdapter' | 'android.widget.DatePicker' | 'android.widget.DialerFilter' | 'android.widget.DigitalClock' | 'android.widget.EdgeEffect' | 'android.widget.EditText' | 'android.widget.ExpandableListAdapter' | 'android.widget.ExpandableListView' | 'android.widget.Filter' | 'android.widget.Filterable' | 'android.widget.FilterQueryProvider' | 'android.widget.FrameLayout' | 'android.widget.Gallery' | 'android.widget.GridLayout' | 'android.widget.GridView' | 'android.widget.HeaderViewListAdapter' | 'android.widget.HeterogeneousExpandableList' | 'android.widget.HorizontalScrollView' | 'android.widget.ImageButton' | 'android.widget.ImageSwitcher' | 'android.widget.ImageView' | 'android.widget.LinearLayout' | 'android.widget.ListAdapter' | 'android.widget.ListPopupWindow' | 'android.widget.ListView' | 'android.widget.Magnifier' | 'android.widget.MediaController' | 'android.widget.MultiAutoCompleteTextView' | 'android.widget.NumberPicker' | 'android.widget.OverScroller' | 'android.widget.PopupMenu' | 'android.widget.PopupWindow' | 'android.widget.ProgressBar' | 'android.widget.QuickContactBadge' | 'android.widget.RadioButton' | 'android.widget.RadioGroup' | 'android.widget.RatingBar' | 'android.widget.RelativeLayout' | 'android.widget.RemoteViews' | 'android.widget.RemoteViewsService' | 'android.widget.ResourceCursorAdapter' | 'android.widget.ResourceCursorTreeAdapter' | 'android.widget.Scroller' | 'android.widget.ScrollView' | 'android.widget.SearchView' | 'android.widget.SectionIndexer' | 'android.widget.SeekBar' | 'android.widget.ShareActionProvider' | 'android.widget.SimpleAdapter' | 'android.widget.SimpleCursorAdapter' | 'android.widget.SimpleCursorTreeAdapter' | 'android.widget.SimpleExpandableListAdapter' | 'android.widget.SlidingDrawer' | 'android.widget.Space' | 'android.widget.Spinner' | 'android.widget.SpinnerAdapter' | 'android.widget.StackView' | 'android.widget.Switch' | 'android.widget.TabHost' | 'android.widget.TableLayout' | 'android.widget.TableRow' | 'android.widget.TabWidget' | 'android.widget.TextClock' | 'android.widget.TextSwitcher' | 'android.widget.TextView' | 'android.widget.ThemedSpinnerAdapter' | 'android.widget.TimePicker' | 'android.widget.Toast' | 'android.widget.ToggleButton' | 'android.widget.Toolbar' | 'android.widget.TwoLineListItem' | 'android.widget.VideoView' | 'android.widget.ViewAnimator' | 'android.widget.ViewFlipper' | 'android.widget.ViewSwitcher' | 'android.widget.WrapperListAdapter' | 'android.widget.ZoomButton' | 'android.widget.ZoomButtonsController' | 'android.widget.ZoomControls';
        type StringAbbr = 'AbsListView' | 'AbsoluteLayout' | 'AbsSeekBar' | 'AbsSpinner' | 'ActionMenuView' | 'Adapter' | 'AdapterView' | 'AdapterViewAnimator' | 'AdapterViewFlipper' | 'Advanceable' | 'AlphabetIndexer' | 'AnalogClock' | 'ArrayAdapter' | 'AutoCompleteTextView' | 'BaseAdapter' | 'BaseExpandableListAdapter' | 'Button' | 'CalendarView' | 'Checkable' | 'CheckBox' | 'CheckedTextView' | 'Chronometer' | 'CompoundButton' | 'CursorAdapter' | 'CursorTreeAdapter' | 'DatePicker' | 'DialerFilter' | 'DigitalClock' | 'EdgeEffect' | 'EditText' | 'ExpandableListAdapter' | 'ExpandableListView' | 'Filter' | 'Filterable' | 'FilterQueryProvider' | 'FrameLayout' | 'Gallery' | 'GridLayout' | 'GridView' | 'HeaderViewListAdapter' | 'HeterogeneousExpandableList' | 'HorizontalScrollView' | 'ImageButton' | 'ImageSwitcher' | 'ImageView' | 'LinearLayout' | 'ListAdapter' | 'ListPopupWindow' | 'ListView' | 'Magnifier' | 'MediaController' | 'MultiAutoCompleteTextView' | 'NumberPicker' | 'OverScroller' | 'PopupMenu' | 'PopupWindow' | 'ProgressBar' | 'QuickContactBadge' | 'RadioButton' | 'RadioGroup' | 'RatingBar' | 'RelativeLayout' | 'RemoteViews' | 'RemoteViewsService' | 'ResourceCursorAdapter' | 'ResourceCursorTreeAdapter' | 'Scroller' | 'ScrollView' | 'SearchView' | 'SectionIndexer' | 'SeekBar' | 'ShareActionProvider' | 'SimpleAdapter' | 'SimpleCursorAdapter' | 'SimpleCursorTreeAdapter' | 'SimpleExpandableListAdapter' | 'SlidingDrawer' | 'Space' | 'Spinner' | 'SpinnerAdapter' | 'StackView' | 'Switch' | 'TabHost' | 'TableLayout' | 'TableRow' | 'TabWidget' | 'TextClock' | 'TextSwitcher' | 'TextView' | 'ThemedSpinnerAdapter' | 'TimePicker' | 'Toast' | 'ToggleButton' | 'Toolbar' | 'TwoLineListItem' | 'VideoView' | 'ViewAnimator' | 'ViewFlipper' | 'ViewSwitcher' | 'WrapperListAdapter' | 'ZoomButton' | 'ZoomButtonsController' | 'ZoomControls';
    }

    namespace Attribute {
        type ImageView = 'adjustViewBounds' | 'baseline' | 'baselineAlignBottom' | 'cropToPadding' | 'maxHeight' | 'maxWidth' | 'path' | 'scaleType' | 'src' | 'tint' | 'tintMode' | 'url';
        type AppBarLayout = 'elevation' | 'expanded';
        type TextView = 'id' | 'gravity' | 'layout_gravity' | 'layout_weight' | 'layout_margin' | 'layout_marginLeft' | 'layout_marginRight' | 'layout_marginTop' | 'layout_marginBottom' | 'layout_marginStart' | 'layout_marginEnd' | 'padding' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom' | 'paddingStart' | 'paddingEnd' | 'alpha' | 'backgroundTint' | 'backgroundTintMode' | 'clickable' | 'checked' | 'contentDescription' | 'contextClickable' | 'scaleX' | 'scaleY' | 'rotation' | 'rotationX' | 'rotationY' | 'saveEnabled' | 'transformPivotX' | 'transformPivotY' | 'translationX' | 'translationY' | 'visibility' | 'tag' | 'soundEffectsEnabled' | 'scrollbarStyle' | 'scrollX' | 'scrollY' | 'scrollIndicators' | 'scrollbarDefaultDelayBeforeFade' | 'scrollbarFadeDuration' | 'scrollbarSize' | 'textAlignment' | 'textDirection' | 'transitionName' | 'translationZ' | 'scrollbars' | 'drawingCacheQuality' | 'duplicateParentState' | 'fadeScrollbars' | 'fadingEdgeLength' | 'filterTouchesWhenObscured' | 'fitsSystemWindows' | 'focusable' | 'focusableInTouchMode' | 'hapticFeedbackEnabled' | 'isScrollContainer' | 'keepScreenOn' | 'longClickable' | 'minHeight' | 'minWidth' | 'elevation' | 'forceHasOverlappingRendering' | 'foreground' | 'foregroundGravity' | 'foregroundTintMode' | 'importantForAccessibility' | 'layoutDirection';
        type CardView = 'cardBackgroundColor' | 'cardCornerRadius' | 'cardElevation' | 'cardMaxElevation' | 'cardPreventCornerOverlap' | 'cardUseCompatPadding' | 'contentPadding' | 'contentPaddingBottom' | 'contentPaddingLeft' | 'contentPaddingTop' | 'contentPaddingRight';
        type FloatingActionButton = 'elevation' | 'fabCustomSize' | 'fabSize' | 'rippleColor' | 'useCompatPadding';
    }

    namespace ActivityInfo {
        type ScreenOrientationKey = 'SCREEN_ORIENTATION_BEHIND' | 'SCREEN_ORIENTATION_FULL_SENSOR' | 'SCREEN_ORIENTATION_FULL_USER' | 'SCREEN_ORIENTATION_LANDSCAPE' | 'SCREEN_ORIENTATION_LOCKED' | 'SCREEN_ORIENTATION_NOSENSOR' | 'SCREEN_ORIENTATION_PORTRAIT' | 'SCREEN_ORIENTATION_REVERSE_LANDSCAPE' | 'SCREEN_ORIENTATION_REVERSE_PORTRAIT' | 'SCREEN_ORIENTATION_SENSOR' | 'SCREEN_ORIENTATION_SENSOR_LANDSCAPE' | 'SCREEN_ORIENTATION_SENSOR_PORTRAIT' | 'SCREEN_ORIENTATION_UNSET' | 'SCREEN_ORIENTATION_UNSPECIFIED' | 'SCREEN_ORIENTATION_USER' | 'SCREEN_ORIENTATION_USER_LANDSCAPE' | 'SCREEN_ORIENTATION_USER_PORTRAIT';
        type ScreenOrientationKeyAbbr = 'BEHIND' | 'FULL_SENSOR' | 'FULL_USER' | 'LANDSCAPE' | 'LOCKED' | 'NOSENSOR' | 'PORTRAIT' | 'REVERSE_LANDSCAPE' | 'REVERSE_PORTRAIT' | 'SENSOR' | 'SENSOR_LANDSCAPE' | 'SENSOR_PORTRAIT' | 'UNSET' | 'UNSPECIFIED' | 'USER' | 'USER_LANDSCAPE' | 'USER_PORTRAIT';
    }

    type Rect = android.graphics.Rect;

    type Keycode = 'KEYCODE_0' | 'KEYCODE_1' | 'KEYCODE_11' | 'KEYCODE_12' | 'KEYCODE_2' | 'KEYCODE_3' | 'KEYCODE_3D_MODE' | 'KEYCODE_4' | 'KEYCODE_5' | 'KEYCODE_6' | 'KEYCODE_7' | 'KEYCODE_8' | 'KEYCODE_9' | 'KEYCODE_A' | 'KEYCODE_ALT_LEFT' | 'KEYCODE_ALT_RIGHT' | 'KEYCODE_APOSTROPHE' | 'KEYCODE_APP_SWITCH' | 'KEYCODE_ASSIST' | 'KEYCODE_AT' | 'KEYCODE_AVR_INPUT' | 'KEYCODE_AVR_POWER' | 'KEYCODE_B' | 'KEYCODE_BACK' | 'KEYCODE_BACKSLASH' | 'KEYCODE_BOOKMARK' | 'KEYCODE_BREAK' | 'KEYCODE_BRIGHTNESS_DOWN' | 'KEYCODE_BRIGHTNESS_UP' | 'KEYCODE_BUTTON_1' | 'KEYCODE_BUTTON_10' | 'KEYCODE_BUTTON_11' | 'KEYCODE_BUTTON_12' | 'KEYCODE_BUTTON_13' | 'KEYCODE_BUTTON_14' | 'KEYCODE_BUTTON_15' | 'KEYCODE_BUTTON_16' | 'KEYCODE_BUTTON_2' | 'KEYCODE_BUTTON_3' | 'KEYCODE_BUTTON_4' | 'KEYCODE_BUTTON_5' | 'KEYCODE_BUTTON_6' | 'KEYCODE_BUTTON_7' | 'KEYCODE_BUTTON_8' | 'KEYCODE_BUTTON_9' | 'KEYCODE_BUTTON_A' | 'KEYCODE_BUTTON_B' | 'KEYCODE_BUTTON_C' | 'KEYCODE_BUTTON_L1' | 'KEYCODE_BUTTON_L2' | 'KEYCODE_BUTTON_MODE' | 'KEYCODE_BUTTON_R1' | 'KEYCODE_BUTTON_R2' | 'KEYCODE_BUTTON_SELECT' | 'KEYCODE_BUTTON_START' | 'KEYCODE_BUTTON_THUMBL' | 'KEYCODE_BUTTON_THUMBR' | 'KEYCODE_BUTTON_X' | 'KEYCODE_BUTTON_Y' | 'KEYCODE_BUTTON_Z' | 'KEYCODE_C' | 'KEYCODE_CALCULATOR' | 'KEYCODE_CALENDAR' | 'KEYCODE_CALL' | 'KEYCODE_CAMERA' | 'KEYCODE_CAPS_LOCK' | 'KEYCODE_CAPTIONS' | 'KEYCODE_CHANNEL_DOWN' | 'KEYCODE_CHANNEL_UP' | 'KEYCODE_CLEAR' | 'KEYCODE_COMMA' | 'KEYCODE_CONTACTS' | 'KEYCODE_COPY' | 'KEYCODE_CTRL_LEFT' | 'KEYCODE_CTRL_RIGHT' | 'KEYCODE_CUT' | 'KEYCODE_D' | 'KEYCODE_DEL' | 'KEYCODE_DPAD_CENTER' | 'KEYCODE_DPAD_DOWN' | 'KEYCODE_DPAD_DOWN_LEFT' | 'KEYCODE_DPAD_DOWN_RIGHT' | 'KEYCODE_DPAD_LEFT' | 'KEYCODE_DPAD_RIGHT' | 'KEYCODE_DPAD_UP' | 'KEYCODE_DPAD_UP_LEFT' | 'KEYCODE_DPAD_UP_RIGHT' | 'KEYCODE_DVR' | 'KEYCODE_E' | 'KEYCODE_EISU' | 'KEYCODE_ENDCALL' | 'KEYCODE_ENTER' | 'KEYCODE_ENVELOPE' | 'KEYCODE_EQUALS' | 'KEYCODE_ESCAPE' | 'KEYCODE_EXPLORER' | 'KEYCODE_F' | 'KEYCODE_F1' | 'KEYCODE_F10' | 'KEYCODE_F11' | 'KEYCODE_F12' | 'KEYCODE_F2' | 'KEYCODE_F3' | 'KEYCODE_F4' | 'KEYCODE_F5' | 'KEYCODE_F6' | 'KEYCODE_F7' | 'KEYCODE_F8' | 'KEYCODE_F9' | 'KEYCODE_FOCUS' | 'KEYCODE_FORWARD' | 'KEYCODE_FORWARD_DEL' | 'KEYCODE_FUNCTION' | 'KEYCODE_G' | 'KEYCODE_GRAVE' | 'KEYCODE_GUIDE' | 'KEYCODE_H' | 'KEYCODE_HEADSETHOOK' | 'KEYCODE_HELP' | 'KEYCODE_HENKAN' | 'KEYCODE_HOME' | 'KEYCODE_I' | 'KEYCODE_INFO' | 'KEYCODE_INSERT' | 'KEYCODE_J' | 'KEYCODE_K' | 'KEYCODE_KANA' | 'KEYCODE_KATAKANA_HIRAGANA' | 'KEYCODE_L' | 'KEYCODE_LANGUAGE_SWITCH' | 'KEYCODE_LAST_CHANNEL' | 'KEYCODE_LEFT_BRACKET' | 'KEYCODE_M' | 'KEYCODE_MANNER_MODE' | 'KEYCODE_MEDIA_AUDIO_TRACK' | 'KEYCODE_MEDIA_CLOSE' | 'KEYCODE_MEDIA_EJECT' | 'KEYCODE_MEDIA_FAST_FORWARD' | 'KEYCODE_MEDIA_NEXT' | 'KEYCODE_MEDIA_PAUSE' | 'KEYCODE_MEDIA_PLAY' | 'KEYCODE_MEDIA_PLAY_PAUSE' | 'KEYCODE_MEDIA_PREVIOUS' | 'KEYCODE_MEDIA_RECORD' | 'KEYCODE_MEDIA_REWIND' | 'KEYCODE_MEDIA_SKIP_BACKWARD' | 'KEYCODE_MEDIA_SKIP_FORWARD' | 'KEYCODE_MEDIA_STEP_BACKWARD' | 'KEYCODE_MEDIA_STEP_FORWARD' | 'KEYCODE_MEDIA_STOP' | 'KEYCODE_MEDIA_TOP_MENU' | 'KEYCODE_MENU' | 'KEYCODE_META_LEFT' | 'KEYCODE_META_RIGHT' | 'KEYCODE_MINUS' | 'KEYCODE_MOVE_END' | 'KEYCODE_MOVE_HOME' | 'KEYCODE_MUHENKAN' | 'KEYCODE_MUSIC' | 'KEYCODE_MUTE' | 'KEYCODE_N' | 'KEYCODE_NAVIGATE_IN' | 'KEYCODE_NAVIGATE_NEXT' | 'KEYCODE_NAVIGATE_OUT' | 'KEYCODE_NAVIGATE_PREVIOUS' | 'KEYCODE_NOTIFICATION' | 'KEYCODE_NUM' | 'KEYCODE_NUMPAD_0' | 'KEYCODE_NUMPAD_1' | 'KEYCODE_NUMPAD_2' | 'KEYCODE_NUMPAD_3' | 'KEYCODE_NUMPAD_4' | 'KEYCODE_NUMPAD_5' | 'KEYCODE_NUMPAD_6' | 'KEYCODE_NUMPAD_7' | 'KEYCODE_NUMPAD_8' | 'KEYCODE_NUMPAD_9' | 'KEYCODE_NUMPAD_ADD' | 'KEYCODE_NUMPAD_COMMA' | 'KEYCODE_NUMPAD_DIVIDE' | 'KEYCODE_NUMPAD_DOT' | 'KEYCODE_NUMPAD_ENTER' | 'KEYCODE_NUMPAD_EQUALS' | 'KEYCODE_NUMPAD_LEFT_PAREN' | 'KEYCODE_NUMPAD_MULTIPLY' | 'KEYCODE_NUMPAD_RIGHT_PAREN' | 'KEYCODE_NUMPAD_SUBTRACT' | 'KEYCODE_NUM_LOCK' | 'KEYCODE_O' | 'KEYCODE_P' | 'KEYCODE_PAGE_DOWN' | 'KEYCODE_PAGE_UP' | 'KEYCODE_PAIRING' | 'KEYCODE_PASTE' | 'KEYCODE_PERIOD' | 'KEYCODE_PICTSYMBOLS' | 'KEYCODE_PLUS' | 'KEYCODE_POUND' | 'KEYCODE_POWER' | 'KEYCODE_PROG_BLUE' | 'KEYCODE_PROG_GREEN' | 'KEYCODE_PROG_RED' | 'KEYCODE_PROG_YELLOW' | 'KEYCODE_Q' | 'KEYCODE_R' | 'KEYCODE_REFRESH' | 'KEYCODE_RIGHT_BRACKET' | 'KEYCODE_RO' | 'KEYCODE_S' | 'KEYCODE_SCROLL_LOCK' | 'KEYCODE_SEARCH' | 'KEYCODE_SEMICOLON' | 'KEYCODE_SETTINGS' | 'KEYCODE_SHIFT_LEFT' | 'KEYCODE_SHIFT_RIGHT' | 'KEYCODE_SLASH' | 'KEYCODE_SLEEP' | 'KEYCODE_SOFT_LEFT' | 'KEYCODE_SOFT_RIGHT' | 'KEYCODE_SOFT_SLEEP' | 'KEYCODE_SPACE' | 'KEYCODE_STAR' | 'KEYCODE_STB_INPUT' | 'KEYCODE_STB_POWER' | 'KEYCODE_STEM_1' | 'KEYCODE_STEM_2' | 'KEYCODE_STEM_3' | 'KEYCODE_STEM_PRIMARY' | 'KEYCODE_SWITCH_CHARSET' | 'KEYCODE_SYM' | 'KEYCODE_SYSRQ' | 'KEYCODE_SYSTEM_NAVIGATION_DOWN' | 'KEYCODE_SYSTEM_NAVIGATION_LEFT' | 'KEYCODE_SYSTEM_NAVIGATION_RIGHT' | 'KEYCODE_SYSTEM_NAVIGATION_UP' | 'KEYCODE_T' | 'KEYCODE_TAB' | 'KEYCODE_TV' | 'KEYCODE_TV_ANTENNA_CABLE' | 'KEYCODE_TV_AUDIO_DESCRIPTION' | 'KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN' | 'KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP' | 'KEYCODE_TV_CONTENTS_MENU' | 'KEYCODE_TV_DATA_SERVICE' | 'KEYCODE_TV_INPUT' | 'KEYCODE_TV_INPUT_COMPONENT_1' | 'KEYCODE_TV_INPUT_COMPONENT_2' | 'KEYCODE_TV_INPUT_COMPOSITE_1' | 'KEYCODE_TV_INPUT_COMPOSITE_2' | 'KEYCODE_TV_INPUT_HDMI_1' | 'KEYCODE_TV_INPUT_HDMI_2' | 'KEYCODE_TV_INPUT_HDMI_3' | 'KEYCODE_TV_INPUT_HDMI_4' | 'KEYCODE_TV_INPUT_VGA_1' | 'KEYCODE_TV_MEDIA_CONTEXT_MENU' | 'KEYCODE_TV_NETWORK' | 'KEYCODE_TV_NUMBER_ENTRY' | 'KEYCODE_TV_POWER' | 'KEYCODE_TV_RADIO_SERVICE' | 'KEYCODE_TV_SATELLITE' | 'KEYCODE_TV_SATELLITE_BS' | 'KEYCODE_TV_SATELLITE_CS' | 'KEYCODE_TV_SATELLITE_SERVICE' | 'KEYCODE_TV_TELETEXT' | 'KEYCODE_TV_TERRESTRIAL_ANALOG' | 'KEYCODE_TV_TERRESTRIAL_DIGITAL' | 'KEYCODE_TV_TIMER_PROGRAMMING' | 'KEYCODE_TV_ZOOM_MODE' | 'KEYCODE_U' | 'KEYCODE_UNKNOWN' | 'KEYCODE_V' | 'KEYCODE_VOICE_ASSIST' | 'KEYCODE_VOLUME_DOWN' | 'KEYCODE_VOLUME_MUTE' | 'KEYCODE_VOLUME_UP' | 'KEYCODE_W' | 'KEYCODE_WAKEUP' | 'KEYCODE_WINDOW' | 'KEYCODE_X' | 'KEYCODE_Y' | 'KEYCODE_YEN' | 'KEYCODE_Z' | 'KEYCODE_ZENKAKU_HANKAKU' | 'KEYCODE_ZOOM_IN' | 'KEYCODE_ZOOM_OUT' | 'KEYCODE_ALL_APPS' | 'KEYCODE_PROFILE_SWITCH' | 'KEYCODE_THUMBS_DOWN' | 'KEYCODE_THUMBS_UP';
    type KeycodeAbbr = '0' | '1' | '11' | '12' | '2' | '3' | '3D_MODE' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'ALT_LEFT' | 'ALT_RIGHT' | 'APOSTROPHE' | 'APP_SWITCH' | 'ASSIST' | 'AT' | 'AVR_INPUT' | 'AVR_POWER' | 'B' | 'BACK' | 'BACKSLASH' | 'BOOKMARK' | 'BREAK' | 'BRIGHTNESS_DOWN' | 'BRIGHTNESS_UP' | 'BUTTON_1' | 'BUTTON_10' | 'BUTTON_11' | 'BUTTON_12' | 'BUTTON_13' | 'BUTTON_14' | 'BUTTON_15' | 'BUTTON_16' | 'BUTTON_2' | 'BUTTON_3' | 'BUTTON_4' | 'BUTTON_5' | 'BUTTON_6' | 'BUTTON_7' | 'BUTTON_8' | 'BUTTON_9' | 'BUTTON_A' | 'BUTTON_B' | 'BUTTON_C' | 'BUTTON_L1' | 'BUTTON_L2' | 'BUTTON_MODE' | 'BUTTON_R1' | 'BUTTON_R2' | 'BUTTON_SELECT' | 'BUTTON_START' | 'BUTTON_THUMBL' | 'BUTTON_THUMBR' | 'BUTTON_X' | 'BUTTON_Y' | 'BUTTON_Z' | 'C' | 'CALCULATOR' | 'CALENDAR' | 'CALL' | 'CAMERA' | 'CAPS_LOCK' | 'CAPTIONS' | 'CHANNEL_DOWN' | 'CHANNEL_UP' | 'CLEAR' | 'COMMA' | 'CONTACTS' | 'COPY' | 'CTRL_LEFT' | 'CTRL_RIGHT' | 'CUT' | 'D' | 'DEL' | 'DPAD_CENTER' | 'DPAD_DOWN' | 'DPAD_DOWN_LEFT' | 'DPAD_DOWN_RIGHT' | 'DPAD_LEFT' | 'DPAD_RIGHT' | 'DPAD_UP' | 'DPAD_UP_LEFT' | 'DPAD_UP_RIGHT' | 'DVR' | 'E' | 'EISU' | 'ENDCALL' | 'ENTER' | 'ENVELOPE' | 'EQUALS' | 'ESCAPE' | 'EXPLORER' | 'F' | 'F1' | 'F10' | 'F11' | 'F12' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'FOCUS' | 'FORWARD' | 'FORWARD_DEL' | 'FUNCTION' | 'G' | 'GRAVE' | 'GUIDE' | 'H' | 'HEADSETHOOK' | 'HELP' | 'HENKAN' | 'HOME' | 'I' | 'INFO' | 'INSERT' | 'J' | 'K' | 'KANA' | 'KATAKANA_HIRAGANA' | 'L' | 'LANGUAGE_SWITCH' | 'LAST_CHANNEL' | 'LEFT_BRACKET' | 'M' | 'MANNER_MODE' | 'MEDIA_AUDIO_TRACK' | 'MEDIA_CLOSE' | 'MEDIA_EJECT' | 'MEDIA_FAST_FORWARD' | 'MEDIA_NEXT' | 'MEDIA_PAUSE' | 'MEDIA_PLAY' | 'MEDIA_PLAY_PAUSE' | 'MEDIA_PREVIOUS' | 'MEDIA_RECORD' | 'MEDIA_REWIND' | 'MEDIA_SKIP_BACKWARD' | 'MEDIA_SKIP_FORWARD' | 'MEDIA_STEP_BACKWARD' | 'MEDIA_STEP_FORWARD' | 'MEDIA_STOP' | 'MEDIA_TOP_MENU' | 'MENU' | 'META_LEFT' | 'META_RIGHT' | 'MINUS' | 'MOVE_END' | 'MOVE_HOME' | 'MUHENKAN' | 'MUSIC' | 'MUTE' | 'N' | 'NAVIGATE_IN' | 'NAVIGATE_NEXT' | 'NAVIGATE_OUT' | 'NAVIGATE_PREVIOUS' | 'NOTIFICATION' | 'NUM' | 'NUMPAD_0' | 'NUMPAD_1' | 'NUMPAD_2' | 'NUMPAD_3' | 'NUMPAD_4' | 'NUMPAD_5' | 'NUMPAD_6' | 'NUMPAD_7' | 'NUMPAD_8' | 'NUMPAD_9' | 'NUMPAD_ADD' | 'NUMPAD_COMMA' | 'NUMPAD_DIVIDE' | 'NUMPAD_DOT' | 'NUMPAD_ENTER' | 'NUMPAD_EQUALS' | 'NUMPAD_LEFT_PAREN' | 'NUMPAD_MULTIPLY' | 'NUMPAD_RIGHT_PAREN' | 'NUMPAD_SUBTRACT' | 'NUM_LOCK' | 'O' | 'P' | 'PAGE_DOWN' | 'PAGE_UP' | 'PAIRING' | 'PASTE' | 'PERIOD' | 'PICTSYMBOLS' | 'PLUS' | 'POUND' | 'POWER' | 'PROG_BLUE' | 'PROG_GREEN' | 'PROG_RED' | 'PROG_YELLOW' | 'Q' | 'R' | 'REFRESH' | 'RIGHT_BRACKET' | 'RO' | 'S' | 'SCROLL_LOCK' | 'SEARCH' | 'SEMICOLON' | 'SETTINGS' | 'SHIFT_LEFT' | 'SHIFT_RIGHT' | 'SLASH' | 'SLEEP' | 'SOFT_LEFT' | 'SOFT_RIGHT' | 'SOFT_SLEEP' | 'SPACE' | 'STAR' | 'STB_INPUT' | 'STB_POWER' | 'STEM_1' | 'STEM_2' | 'STEM_3' | 'STEM_PRIMARY' | 'SWITCH_CHARSET' | 'SYM' | 'SYSRQ' | 'SYSTEM_NAVIGATION_DOWN' | 'SYSTEM_NAVIGATION_LEFT' | 'SYSTEM_NAVIGATION_RIGHT' | 'SYSTEM_NAVIGATION_UP' | 'T' | 'TAB' | 'TV' | 'TV_ANTENNA_CABLE' | 'TV_AUDIO_DESCRIPTION' | 'TV_AUDIO_DESCRIPTION_MIX_DOWN' | 'TV_AUDIO_DESCRIPTION_MIX_UP' | 'TV_CONTENTS_MENU' | 'TV_DATA_SERVICE' | 'TV_INPUT' | 'TV_INPUT_COMPONENT_1' | 'TV_INPUT_COMPONENT_2' | 'TV_INPUT_COMPOSITE_1' | 'TV_INPUT_COMPOSITE_2' | 'TV_INPUT_HDMI_1' | 'TV_INPUT_HDMI_2' | 'TV_INPUT_HDMI_3' | 'TV_INPUT_HDMI_4' | 'TV_INPUT_VGA_1' | 'TV_MEDIA_CONTEXT_MENU' | 'TV_NETWORK' | 'TV_NUMBER_ENTRY' | 'TV_POWER' | 'TV_RADIO_SERVICE' | 'TV_SATELLITE' | 'TV_SATELLITE_BS' | 'TV_SATELLITE_CS' | 'TV_SATELLITE_SERVICE' | 'TV_TELETEXT' | 'TV_TERRESTRIAL_ANALOG' | 'TV_TERRESTRIAL_DIGITAL' | 'TV_TIMER_PROGRAMMING' | 'TV_ZOOM_MODE' | 'U' | 'UNKNOWN' | 'V' | 'VOICE_ASSIST' | 'VOLUME_DOWN' | 'VOLUME_MUTE' | 'VOLUME_UP' | 'W' | 'WAKEUP' | 'WINDOW' | 'X' | 'Y' | 'YEN' | 'Z' | 'ZENKAKU_HANKAKU' | 'ZOOM_IN' | 'ZOOM_OUT' | 'ALL_APPS' | 'PROFILE_SWITCH' | 'THUMBS_DOWN' | 'THUMBS_UP';
}