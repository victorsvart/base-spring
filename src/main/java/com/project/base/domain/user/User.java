package com.project.base.domain.user;

import com.project.base.domain.base.Auditable;
import com.project.base.domain.email.Email;
import com.project.base.domain.name.Name;
import com.project.base.domain.role.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity()
@Table(name = "users")
public class User extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Name name;
  private Email email;
  private String password;
  private Role role;
  private boolean isAccountNonExpired = true;
  private boolean isAccountNonLocked = true;
  private boolean isCredentialsNonExpired = true;
  private boolean isEnabled = true;

  protected User() {
  }

  public Name getName() {
    return name;
  }

  public Email getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public Role getRole() {
    return this.role;
  }

  public boolean isAccountNonExpired() {
    return isAccountNonExpired;
  }

  public boolean isAccountNonLocked() {
    return isAccountNonLocked;
  }

  public boolean isCredentialsNonExpired() {
    return isCredentialsNonExpired;
  }

  public boolean isEnabled() {
    return isEnabled;
  }

  public static class Builder {
    private Name name;
    private Email email;
    private String password;
    private Role role;

    public Builder name(String name) {
      this.name = Name.of(name);
      return this;
    }

    public Builder email(String email) {
      this.email = Email.of(email);
      return this;
    }

    public Builder password(String password) {
      this.password = password;
      return this;
    }

    public Builder role(Role role) {
      this.role = role;
      return this;
    }

    public User build() {
      User user = new User();
      user.name = this.name;
      user.email = this.email;
      user.password = this.password;
      user.role = this.role;
      return user;
    }
  }
}
