// profile.page.ts
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profileId: string;

  character: any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.profileId = "";
  }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";
    this.http
      .get("https://rickandmortyapi.com/api/character/" + this.profileId)
      .subscribe((res) => {
        this.character = res;
      });
  }
}
