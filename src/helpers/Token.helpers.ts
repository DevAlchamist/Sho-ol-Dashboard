class TokenHelper {
    private key: string;
    constructor() {
      this.key = "token";
    }
    get = (): string | null => {
      return window.localStorage.getItem(this.key);
    };
    create = (token: string): void => {
      return window.localStorage.setItem(this.key, token);
    };
    delete = (): void => {
      return window.localStorage.removeItem(this.key);
    };
  }
  
  export default new TokenHelper();