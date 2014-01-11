/**
 * NOTE: Tests have to be manually added to Suite.as
 */
package uk.co.cameronhunter.as3.utils {

  import asunit.framework.TestCase;

  public class UriTest extends TestCase {

    public function UriTest(testMethod: String = null) {
      super(testMethod);
    }

    public function test_isSafe(): void {
      assertEquals("Safe URL", Uri.isSafe("https://vine.co/foo.jpg"), "https://vine.co/foo.jpg");
    }
	
	public function test_isSafe_null(): void {
      assertThrows(Error, function(): void {
        Uri.isSafe(null);
      });
    }

    public function test_isSafe_protects_against_null_character_attack(): void {
      assertThrows(Error, function(): void {
        Uri.isSafe("https://vine.co%00@masatoxss.appspot.com#alert(location)");
      });
    }

  }

}
