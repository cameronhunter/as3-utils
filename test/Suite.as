package {

  import asunit.framework.TestSuite;
  import uk.co.cameronhunter.as3.utils.*;

  public class Suite extends TestSuite {
    public function Suite() {
      super();
      addTest(new UriTest("test_isSafe"));
      addTest(new UriTest("test_isSafe_protects_against_null_character_attack"));
    }
  }
}
