/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"nP20ziQFfiUT34mVdZwsSS3WioYvU7Es"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"3jrJJKZBmZ5yfOk4uBCGGSmlESfEAlmT"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"yHs68KXzcPdY2ik6YuOOYqKqXgSRC20R"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"26rQjT5RRCcjV1Mp8AM7C6cbr4QEjy8A"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"CgtO78PEswCvTioT3G8IkCvGiwSBDV2o"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"4FCZ4dVtAjX8wXkJxqPI3dGIo2gj0AIB"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
