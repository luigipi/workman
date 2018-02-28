<Logo />
    <LoginButton
        text="Continue with facebook"
        icon={require('../components/Buttons/images/fb.png')}
        onPress={this.handleFbButton}
    />
    <GoogleLogin
        text="Continue with Google"
        icon={require('../components/Buttons/images/google.png')}
        onPress={this.handleButtonPress}
    />
    <SignupBtn
        text="Sign up with email"
        onPress={this.handleEmailSignup} />
    <FootButton
        logintext="Already have an account?"
        boldtext="Login"
        onPress={this.handleLogin}
    />