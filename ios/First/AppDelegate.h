#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>

// Added for "@react-native-community/push-notification-ios".
#import <UserNotifications/UNUserNotificationCenter.h>

@interface AppDelegate : RCTAppDelegate <UNUserNotificationCenterDelegate>

@end
