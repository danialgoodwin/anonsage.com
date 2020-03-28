---
title: Simple sample of Android in-app billing v2 in Kotlin
tags:
- Android
- Kotlin
---

Over the course of a few days this week, for my side project, I implemented Android in-app billing v2 in Kotlin. It took about 5 hours to read through everything and implement it, but it should have taken less than an hour with the right sample code and walk-through.

This is that walk-through that I would have wanted to just quickly implement subscription services in my app.

Google, in general, has good documentation for their in-app billing, but their code sample was more helpful for me, even though it wasn't updated for the latest version of the library. There was a major version update with breaking changes that couldn't be copy-pasted into a current app.

There are about ten main pages of documentation for in-app billing, but to simply get started and running, you will only need one doc page and one sample code page:
- https://developer.android.com/google/play/billing/billing_overview
- https://github.com/googlesamples/android-play-billing/blob/master/TrivialDrive_v2/shared-module/src/main/java/com/example/billingmodule/billing/BillingManager.java
 
Or...
 
I can just provide the highlights and updated code that will actually work...
- Product IDs must be unique and can NOT be reused. Product IDs must start with a lowercase letter or a number and must be composed of only lowercase letters (a-z), numbers (0-9), underscores (_), and periods (.). The product ID 'android.test' is unavailable for use, along with all product IDs that start with 'android.test'.
- Subscriptions can NOT be unpublished
- Subscription prices must be within a certain price range, US currently USD .99 - 400.00: https://support.google.com/googleplay/android-developer/table/3541286
- The easiest way to test your purchase flow is to have testers defined in the Google Play Console > Settings > Developer account > Account details > License Testing > 'Gmail accounts with testing access'

Code:
- Add `implementation 'com.android.billingclient:billing:2.0.0'` in your app's build.gradle file
- Add `<uses-permission android:name="com.android.vending.BILLING" />` in your app's AndroidManifest.xml file
- Copy+paste this gist, then change the SKUs for your usage: https://gist.github.com/danialgoodwin/5bc709b19b776e707a827772401aaf96 (shown below)

{% gist user="danialgoodwin" id="5bc709b19b776e707a827772401aaf96" %}

From "0" to "it works on my machine" :p
