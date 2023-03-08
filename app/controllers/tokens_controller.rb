class TokensController < Devise::Api::TokensController
  
  def sign_in
    super
  end

  def revoke
    super
  end

  def info
    super
  end

  def refresh
    super
  end

  private
  def sign_up_params
    params.permit(:first_name, :last_name, :phone_number, *resource_class.authentication_keys,
                  *::Devise::ParameterSanitizer::DEFAULT_PERMITTED_ATTRIBUTES[:sign_up]).to_h
  end
end