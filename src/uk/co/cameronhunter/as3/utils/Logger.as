package uk.co.cameronhunter.as3.utils {

  import flash.external.ExternalInterface;

  public class Logger {

    public static function log(... args: *): void {
      if (CONFIG::DEBUG) ExternalInterface.call("console.log", args.join(", "));
    }

    public static function error(... args: *): void {
      if (CONFIG::DEBUG) ExternalInterface.call("console.error", args.join(", "));
    }

  }

}
