<template>
  <form @submit.prevent="onSubmit">
    <label for="email">Email :</label>
    <input type="email" name="email" id="email" required v-model="email" />

    <label for="password">Password :</label>
    <input
      type="password"
      name="password"
      id="password"
      required
      v-model="password"
    />
    <p class="error" v-if="passwordError">{{ passwordError }}</p>

    <label for="role">Role:</label>
    <select name="role" id="role" v-model="role">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="manager">Manager</option>
    </select>

    <label for="skills">Skills :</label>
    <input type="text" id="skills" v-model="tempSkill" @keyup="addSkill" />
    <p class="skills">
      <span v-for="skill in skills" :key="skill" @click="deleteSkill(skill)">
        {{ skill }}
      </span>
    </p>

    <div class="terms">
      <input type="checkbox" id="terms" v-model="terms" required />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <button class="submit" type="submit">Create an Account</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        email: 'developer@mail.co.uk',
        password: '',
        role: 'developer',
        terms: false,
        tempSkill: '',
        skills: JSON.parse(localStorage.getItem('skills')) || [],
        passwordError: '',
      };
    },
    methods: {
      addSkill(e) {
        if (e.key === ',' && this.tempSkill) {
          const skill = this.tempSkill.slice(0, this.tempSkill.length - 1);
          if (!this.skills.includes(skill)) {
            this.skills.push(skill);
            localStorage.setItem('skills', JSON.stringify(this.skills));
          }
          this.tempSkill = '';
        }
      },
      deleteSkill(skill) {
        this.skills = this.skills.filter((item) => item !== skill);
        localStorage.setItem('skills', JSON.stringify(this.skills));
      },
      onSubmit() {
        console.log('submit!');
        this.passwordError =
          this.password.length > 5
            ? ''
            : 'Password should be more than 5 characters in length';
        if (!this.passwordError) {
          console.log({
            email: this.email,
            password: this.password,
            role: this.role,
            skills: this.skills,
            terms: this.terms,
          });
        }
      },
    },
  };
</script>

<style>
  form {
    background-color: #fff;
    max-width: 36rem;
    margin: 4rem auto;
    padding: 5rem 3rem;
    text-align: left;
    border-radius: 1.5rem;
    box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.15);
  }

  label {
    display: block;
    text-transform: uppercase;
    color: #bbb;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #999;
    color: #666;
    font-size: 1rem;
    margin-bottom: 3rem;
    transition: border 0.3s ease-in;
  }

  input:focus {
    border-color: rgb(248, 40, 109);
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background: url('../images/arrow-down.svg') no-repeat 98% center;
    background-size: 0.8rem 0.8rem;
  }

  select:hover {
    background: url('../images/arrow-up.svg') no-repeat 98% center;
    background-size: 0.8rem 0.8rem;
  }

  input[type='checkbox'] {
    appearance: none;
    border: 2px solid #999;
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    display: inline-block;
    margin: 0;
    margin-right: 1rem;
    margin-top: -2px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  input[type='checkbox']:hover {
    background-color: #ddd;
  }

  #terms:checked {
    background-image: url('../images/check.svg');
    background-size: 0.8rem 0.8rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: rgb(248, 40, 109);
    box-shadow: 0 0 1rem rgba(255, 22, 100, 0.5);
    border-color: rgb(248, 40, 109);
    /* transition: all 0.3s ease-in; */
  }

  #terms:checked:hover {
    background-color: rgb(218, 35, 96);
    border-color: rgb(218, 35, 96);
    box-shadow: 0 0 0.25rem rgba(255, 22, 100, 0.5);
    transform: scale(0.99);
  }

  .terms {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 3rem;
  }

  .terms label {
    display: inline-block;
    margin: 0;
  }

  .skills {
    text-transform: lowercase;
    font-weight: bold;
    /* color: rgb(248, 40, 109); */
    color: #999;
  }

  .skills span {
    display: inline-block;
    letter-spacing: 1px;
    background-color: #eee;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .skills span:hover {
    background-color: #ddd;
  }
  .submit {
    display: block;
    margin: 3rem auto 0 auto;
    padding: 1rem 1.75rem;
    border: none;
    border-radius: 6rem;
    background-color: rgb(248, 40, 109);
    box-shadow: 0 0 1.25rem rgba(255, 22, 100, 0.5);
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .submit:hover {
    background-color: rgb(218, 35, 96);
    box-shadow: 0 0 0.25rem rgba(255, 22, 100, 0.5);
    transform: scale(0.99);
  }

  .error {
    font-size: 0.8rem;
    margin-top: -2rem;
    margin-bottom: 2.5rem;
    color: red;
  }
</style>
