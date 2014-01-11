package {

  import asunit.framework.TestSuite;
  import uk.co.cameronhunter.as3.utils.*;

  public class Suite extends TestSuite {
    public function Suite() {
      super();
      addTest(new UriTest());
    }
  }
}
